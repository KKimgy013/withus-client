import React from 'react';
import Header from "../components/Header";
import Chatbot from '../components/Chatbot';
import '../css/Chatbot.css';
import '../style.css';

function ChatPage() {
    return (
      
        <div className="Chatbot">
          <div className="chat-page">
                <Header />
                </div>
            <main>
                
                <Chatbot />
            </main>
        </div>

    );
}

export default ChatPage;