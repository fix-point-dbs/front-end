import api from "../lib/api";

export class ReviewModel {
    async createReview(data){
        const res = await api.post('/reviews',data,{
            headers: {
                'Authorization': `Bearer e17e001a-0b21-41ef-8349-b29f83a5d6f2`
            }
        });
        return res.data;
    }
}