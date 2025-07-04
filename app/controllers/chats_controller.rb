class ChatsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show, :create]

  def index
    if user_signed_in?
      @chats = current_user.chats
    else
      @chats = Chat.none
    end
    @chat = Chat.new
    @message = Message.new
  end

  def show
    @chat = Chat.includes(:messages).find(params[:id])
    @message = Message.new
  end

  def create
    @chat = Chat.new(model_id: "o4-mini-2025-04-16")
    @chat.user = current_user if user_signed_in?
    if @chat.save
      redirect_to chat_path(@chat)
    else
      render :index
    end
  end

  def create_chat
    if user_signed_in?
      @chat = Chat.new
      @chat.user = current_user
      @chat.save
      redirect_to chat_path(@chat)
    else
      redirect_to new_user_session_path
    end
  end
end
