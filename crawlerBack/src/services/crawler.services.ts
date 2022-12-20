import crawlerRepository from "../repository/crawler.repository";

const getCrawler = async (url : string) => {
    var crawler = null;

    //save crawler to Db

    crawlerRepository.insertCrawler();

    return crawler;
};

export default {
    getCrawler
};
