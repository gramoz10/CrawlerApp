import { IAnchorsModel } from "./anchors.model";
import { IHeadingsModel } from "./headings.model";
import { IMetatagModel } from "./metatag.model";

export interface ICrawledPageModel {
    url: string,
    title: string,
    headings: IHeadingsModel,
    paragraphs: string[],
    anchors: IAnchorsModel[],
    metatags: IMetatagModel
}