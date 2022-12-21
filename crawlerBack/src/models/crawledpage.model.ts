import { IAnchorsModel } from "./anchors.model";

export interface ICrawledPageModel { 
    url: string,
    title: string,
    h1: string[],
    h2: string[],
    h3: string[],
    h4: string[],
    h5: string[],
    h6: string[],
    paragraphs: string[], 
    anchors: IAnchorsModel[], 
}