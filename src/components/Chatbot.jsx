import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가
    // 메시지 전송 함수
    const sendMessage = async () => {
        if (!input.trim()) return;

        // 사용자 메시지 추가
        const userMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');
        setLoading(true); // 로딩 상태 활성화
        
        try {
            // 백엔드로 메시지 전송
            const response = await axios.post('http://localhost:3000/api/chat', { message: input });

            // 챗봇 응답 추가
            const botMessage = { sender: 'bot', text: response.data.message };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = { sender: 'bot', text: 'API 호출 중 오류가 발생했습니다.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }finally {
            setLoading(false); // 로딩 상태 비활성화
        }
    };

    // 엔터 키로 메시지 전송
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    // 최신 메시지로 스크롤 이동
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chat-wrap">
            <h2>환영합니다😊 대화를 시작해주세요!</h2>
            
            <div id="chat-container">
                <div id="chat-messages">
                    {messages.map((msg, index) => (
                        <div className='message-box'>
                            <div key={index} className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                                <strong>{msg.sender === 'user' ? '' : '마음이: '}</strong> 
                                {msg.text}

                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                    {loading && (
                        <div className='message-box'>
                            <div className="message">
                                <strong>마음이:</strong> 입력 중...
                            </div>
                        </div>
                    )}
                </div>

                <div id="user-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="마음을 나누는 메세지를 입력하세요..."
                    />
                    <button onClick={sendMessage}>전송</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;