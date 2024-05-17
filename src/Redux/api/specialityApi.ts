import { url } from "inspector";
import { baseApi } from "./baseApi";

const specialityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpeciality: build.mutation({
            query: (data) => ({
                url: '/specialties',
                data,
                method: 'POST',
                contentType: 'multipart/form-data'
            })
        })
    }),
})

export const { useCreateSpecialityMutation } = specialityApi