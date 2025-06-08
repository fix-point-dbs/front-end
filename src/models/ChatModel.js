import api from "../lib/api";
import { getToken } from '../utils/LocalStorage';
export class ChatModel {
    async getMessages(chat_id) {
        const res = await api.get(`/chats/${chat_id}/messages`);
        return res.data;
    }
    
    async getChat(mitra_id) {
        const res = await api.post(`/chats`, { mitra_id }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`,
            }
        });
        return res.data;
    }
}