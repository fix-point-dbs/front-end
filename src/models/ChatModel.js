import api from "../lib/api";

export class ChatModel {
    async getMessages(chat_id) {
        const res = await api.get(`/chats/${chat_id}/messages`);
        return res.data;
    }
    
    async getChat(mitra_id) {
        const res = await api.post(`/chats`, { mitra_id }, {
            headers: {
                'Authorization': `Bearer e17e001a-0b21-41ef-8349-b29f83a5d6f2`,
            }
        });
        return res.data;
    }
}