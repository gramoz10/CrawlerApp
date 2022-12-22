import { Router } from "express";
import { Request, Response } from "express";
import {
    getCrawler,
    getCrawlerHistory
} from "../controllers/crawler.controller";
import { addSchema } from "../validators/schemarequest";
import { validateRequestSchema } from "../validators/validaterequest";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    res.json("Hello World !");
});
router.post("/api/crawler", addSchema, validateRequestSchema, getCrawler);
router.get("/api/crawler/history", getCrawlerHistory);

export default router; 