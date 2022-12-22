import crawledModel from '../infrastructure/entities/crawledpage.model';
import { ICrawledPageModel } from '../models/crawledpage.model';

const getCrawlerHistory = async () => {
    var history = crawledModel.find().select({ "url": 1, "_id": 0 });

    return history;
};

const getCrawlerPageByurl = async (url: string) => {
    var history = await crawledModel.find({ "url": url }).select({ "url": 1, "_id": 0 });

    return history;
};

const insertCrawler = async (crawledPage: ICrawledPageModel) => {
    var page = await getCrawlerPageByurl(crawledPage.url);

    var newCrawledPage = new crawledModel({
        "url": crawledPage.url,
        "anchors": crawledPage.anchors,
        "title": crawledPage.title,
        "headings": crawledPage.headings,
        "paragraphs": crawledPage.paragraphs,
        "metatags": crawledPage.metatags
    });

    if (page.length == 0) {
        await newCrawledPage.save();
    } else {
        await crawledModel.findOneAndUpdate({ "url": page[0].url }, crawledPage);
    }

    return newCrawledPage;
};

export default {
    getCrawlerPageByurl,
    getCrawlerHistory,
    insertCrawler
};