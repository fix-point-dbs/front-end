import api from "../lib/api";
import { getToken } from '../lib/auth';
export class ReviewModel {
    async createReview(data){
        const res = await api.post('/reviews',data,{
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }
}