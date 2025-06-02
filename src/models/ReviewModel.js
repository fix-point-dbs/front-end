import api from "../lib/api";

export class ReviewModel {
    async createReview(data){
        const res = await api.post('/reviews',data,{
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`
            }
        });
        return res.data;
    }
}