import crawlerRepository from "../repository/crawler.repository"; 
import { ICrawledPageModel } from "../models/crawledpage.model";
const requestModule = require("request");
const cheerio = require('cheerio'); 
var HTMLParser = require('node-html-parser');
  
 async function getCrawler(url : string) {   
    var result = await crawlPage(url);  
    return result;
};  

function getTagContent(querySelector: any, content: any, pageUrl: any) {
    var tags = content.querySelectorAll(querySelector);
    var innerHTMLs = [];
    for (var a = 0; a < tags.length; a++) {
        var newcontent = "";
 
        var anchorTag = tags[a].querySelector("a");
        if (anchorTag != null) {
            newcontent = anchorTag.innerHTML;
        } else {
            newcontent = tags[a].innerHTML;
        }
 
        newcontent = newcontent.replace(/\s+/g,' ').trim();
 
        if (newcontent.length > 0) {
            innerHTMLs.push(newcontent);
        }
    }
    return innerHTMLs;
}

function crawlPage(url: string, callBack = null) : Promise<any> { 
    return new Promise((resolve, reject) => { 
        var pathArray = url.split( '/' );
        var protocol = pathArray[0];
        var host = pathArray[2];
        var baseUrl = protocol + '//' + host;
  
        requestModule(url, async (error: any, response: { statusCode: number; }, html: any) => {
            if (!error && response.statusCode == 200) { 
                var $ = cheerio.load(html);  
  
                    var html = $.html();
                    var htmlContent = HTMLParser.parse(html);
    
                    var allAnchors = htmlContent.querySelectorAll("a");
                    var anchors = [];
                    for (var a = 0; a < allAnchors.length; a++) {
                        var href = allAnchors[a].getAttribute("href");
                        var title = allAnchors[a].innerHTML;
    
                        var hasAnyChildTag = (allAnchors[a].querySelector("div") != null)
                            || (allAnchors[a].querySelector("img") != null)
                            || (allAnchors[a].querySelector("p") != null)
                            || (allAnchors[a].querySelector("span") != null)
                            || (allAnchors[a].querySelector("svg") != null)
                            || (allAnchors[a].querySelector("strong") != null);
    
                        if (hasAnyChildTag) {
                            continue;
                        }
    
                        if (href != null) {
                            
                            if (href == "#" || href.search("javascript:void(0)") != -1) {
                                continue;
                            }
    
                            var first4Words = href.substr(0, 4);
    
                            if (href.search(url) == -1 && first4Words != "http") {
                                if (href[0] == "/") {
                                    href = baseUrl + href;
                                } else {
                                    href = baseUrl + "/" + href;
                                }
                            }
    
                            anchors.push({
                                "href": href,
                                "text": title
                            });
                        }
                    } 
                    var titles =  getTagContent("title", htmlContent, url);
                    var newtitle = titles.length > 0 ? titles[0] : "";
    
                    var h1 =  getTagContent("h1", htmlContent, url); 

                    var h2 =  getTagContent("h2", htmlContent, url);
    
                    var h3 =  getTagContent("h3", htmlContent, url);
    
                    var h4 =  getTagContent("h4", htmlContent, url);
    
                    var h5 =  getTagContent("h5", htmlContent, url);
    
                    var h6 =  getTagContent("h6", htmlContent, url);
    
                    var paragraphs =  getTagContent("p", htmlContent, url);
    
                    var object : ICrawledPageModel = {
                        "url": url,
                        "anchors": anchors,
                        "title": newtitle,
                        "h1": h1,
                        "h2": h2,
                        "h3": h3,
                        "h4": h4,
                        "h5": h5,
                        "h6": h6,
                        "paragraphs": paragraphs 
                    }; 
    
                    try {   
                        var inserted = await crawlerRepository.insertCrawler(object); 
  
                        resolve(inserted); 
                    } catch (e) {
                        console.log(e);
                    }
                }  
        });   
    });
}

export default {
    getCrawler
};
