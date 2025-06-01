import api from "../lib/api";

export class ReviewModel {
    async createReview(data){
        const res = await api.post('/reviews',data,{
            headers: {
                'Authorization': `Bearer`
            }
        });
        return res.data;
    }
}