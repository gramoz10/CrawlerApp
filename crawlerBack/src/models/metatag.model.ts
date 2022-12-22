import { IImageModel } from "./images.model";
import { IMetaModel } from "./meta.model";

export interface IMetatagModel {
    meta?: IMetaModel,
    images: IImageModel[],
}