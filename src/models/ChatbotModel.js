import axios from "axios";

export class ChatbotModel {
    async getChatbot(data) {
        const res = await axios.post("https://flask.fixpoint.my.id/chatbot-reply", data);
        return res.data;
    }
}