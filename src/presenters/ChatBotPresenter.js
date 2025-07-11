import { ChatbotModel } from "../models/ChatbotModel";

export class ChatBotPresenter {
  constructor(view) {
    this.view = view;
    this.chatbotModel = new ChatbotModel();
  }

  async sendMessage(data) {
    try {
      this.view.setIsLoading(true);
      const res = await this.chatbotModel.getChatbot(data);
      this.view.setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.reply },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      this.view.setIsLoading(false);
    }
  }
}
