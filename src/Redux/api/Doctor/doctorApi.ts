import { tagTypes } from "@/Redux/tag-type";
import { baseApi } from "../baseApi";
import { IDoctor, Tmeta } from "@/type";

const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createDoctor: build.mutation({
            query: (data) => ({
                url: '/user/create-doctor',
                data,
                method: 'POST',
                contentType: 'multipart/form-data'
            }),
            invalidatesTags: [tagTypes.doctor]
        }),
        getAllDoctor: build.query({
            query: () => ({
                url: '/doctor',
                method: 'GET'
            }),
            transformErrorResponse: (response: IDoctor, meta: Tmeta) => {
                return {
                    doctors: response,
                    meta: meta
                }
            },
            providesTags: [tagTypes.doctor]
        }),
    })
})

export const { useCreateDoctorMutation } = doctorApi