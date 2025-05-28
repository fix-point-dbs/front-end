import {  ChatModel } from "../models/ChatModel";
export class ChatPresenter {
    constructor(view) {
        this.view = view;
        this.chatModel = new ChatModel();
    }

    async loadMessages() {
        try {
            // this.view.setIsLoading(true);
            const chat = await this.chatModel.getChat(this.view.mitra_id);
            console.log(chat.data.id);
            this.view.setChatId(chat.data.id);
            const messages = await this.chatModel.getMessages(chat.data.id);
            this.view.setMessages(messages.data);
        } catch (error) {
            console.log(error);
        } finally {
            // this.view.setIsLoading(false);
        }
    }
}