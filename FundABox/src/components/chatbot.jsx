import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = ({ accessToken }) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return; 

    setLoading(true);

    try {
      const response = await axios.post(
        `https://plant.id/api/v3/identification/${accessToken}/conversation`,
        {
          question: question,
          prompt: "Give answer in a friendly tone.", 
          temperature: 0.5,  
          app_name: "MyApp"  
        },
        {
          headers: {
            'Api-Key': '3yj4xJypOqKxyNUkNOtR6gXW7lyUmFduOVAHZmTVvuIr8XW741',
          }
        }
      );

      
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'question', content: question },
        { type: 'answer', content: response.data.messages[response.data.messages.length - 1].content },
      ]);

      setQuestion('');
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">Ask the Plant Chatbot</h2>
  
      <div className="messages space-y-4 mb-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${message.type === 'question' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>
  
      <div className="input-container flex items-center space-x-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the plant..."
          className="p-3 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={askQuestion}
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-300 transition-colors"
        >
          {loading ? 'Asking...' : 'Ask Question'}
        </button>
      </div>
    </div>
  );
  
};

export default Chatbot;