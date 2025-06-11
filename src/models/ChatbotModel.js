import axios from "axios";

export class ChatbotModel {
    async getChatbot(data) {
        const res = await axios.post("http://127.0.0.1:8000/chatbot-reply", data);
        return res.data;
    }
}