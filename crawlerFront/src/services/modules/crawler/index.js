import { api } from "../../api";
import fetchAll from "./fetchAll";

export const crawlerApi = api.injectEndpoints({
    endpoints: build => ({
        fetchAll: fetchAll(build)
    }),
    overrideExisting: false,
})

export const { useFetchAllQuery } = crawlerApi;