import crawledModel from '../infrastructure/entities/crawledpage.model';

const getCrawlerHistory = async () => {
    var history = crawledModel.find().select({"url" : 1, "_id": 0 });

    return history;
};

const insertCrawler = async () => {
    var history = null;
 
    var nwdw = new crawledModel({
        url:"www.google.com"
    });   

    await nwdw.save();

    return history;
};

export default {
    getCrawlerHistory,
    insertCrawler
};