import { IImageModel } from "./images.model";
import { IVideoModel } from "./video.model";

export interface IOgModel {
    title?: string,
    description?: string,
    url?: string,
    site_name?: string,
    type?: string,
    images?: IImageModel[],
    videos?: IVideoModel[]
}