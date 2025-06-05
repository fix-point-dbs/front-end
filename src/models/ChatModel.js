import api from "../lib/api";

export class ChatModel {
    async getMessages(chat_id) {
        const res = await api.get(`/chats/${chat_id}/messages`);
        return res.data;
    }
    
    async getChat(mitra_id) {
        const res = await api.post(`/chats`, { mitra_id }, {
            headers: {
                'Authorization': `Bearer f80ca753-eb98-4d6b-b365-e7f3a2895805`,
            }
        });
        return res.data;
    }
}