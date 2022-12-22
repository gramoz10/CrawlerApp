import { Request, Response } from "express";
import { IUrlModel } from "../models/url.model";
import crawlerRepository from "../repository/crawler.repository";
import crawlerService from "../services/crawler.services";

export const getCrawler = async (req: Request, res: Response) => {
  var page: IUrlModel = req.body;

  var crawledPage = await crawlerService.getCrawler(page.Url);

  if (crawledPage) {
    res.json(crawledPage);
  } else {
    res.status(400).json("crawledPage not found");
  }
};

export const getCrawlerHistory = async (req: Request, res: Response) => {
  var history = await crawlerRepository.getCrawlerHistory();

  if (history) {
    res.json(history);
  } else {
    res.status(400).json("History not found");
  }
};