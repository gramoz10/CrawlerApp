import crawledModel from '../infrastructure/entities/crawledpage.model';
import { ICrawledPageModel } from '../models/crawledpage.model';

const getCrawlerHistory = async () => {
    var history = crawledModel.find().select({"url" : 1, "_id": 0 });

    return history;
};

const getCrawlerPageByurl = async (url: string) => {
    var history = await crawledModel.find({"url" : url}).select({"url" : 1, "_id": 0 });

    return history;
};

const insertCrawler = async (crawledPage: ICrawledPageModel) => {  
    var page = await getCrawlerPageByurl(crawledPage.url);  
  
    var newCrawledPage = new crawledModel({
        "url": crawledPage.url,
        "anchors": crawledPage.anchors,
        "title": crawledPage.title,
        "h1": crawledPage.h1,
        "h2": crawledPage.h2,
        "h3": crawledPage.h3,
        "h4": crawledPage.h4,
        "h5": crawledPage.h5,
        "h6": crawledPage.h6,
        "paragraphs": crawledPage.paragraphs 
    });  
 
    if(page.length == 0){ 
        await newCrawledPage.save();
    }else{
        await crawledModel.findOneAndUpdate({"url":page[0].url}, crawledPage);
    }

    return newCrawledPage;
};

export default {
    getCrawlerPageByurl,
    getCrawlerHistory,
    insertCrawler
};