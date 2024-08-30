"use client"

import React, { useState } from 'react';
import { Send, Train } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import beanPNG from '@/public/bean.jpeg'
import bot from '@/public/bot.jpg'
const ChatMessage = ({ message, isUser, avatarUrl }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    {isUser ? (
      <div className="flex items-center">
        <div className={`max-w-md p-2 rounded-lg bg-blue-500 text-white`}>
          {message}
        </div>
        <Avatar className="ml-2" size="sm">
          <AvatarImage src={bot} alt="Avatar" />
          <AvatarFallback>
            <span className="text-sm font-medium text-gray-900">
              {isUser ? 'You' : 'Bot'}
            </span>
          </AvatarFallback>
        </Avatar>
      </div>
    ) : (
      <div className="flex items-center">
        <Avatar className="mr-2" size="sm">
          <AvatarImage src={beanPNG} alt="Avatar" />
          <AvatarFallback>
            <span className="text-sm font-medium text-gray-900">
              {isUser ? 'You' : 'Bot'}
            </span>
          </AvatarFallback>
        </Avatar>
        <div className={`max-w-md p-2 rounded-lg bg-gray-200 text-gray-800`}>
          {message}
        </div>
      </div>
    )}
  </div>
);

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to Railway Helper! How can I assist you today?", isUser: false, avatarUrl: 'https://placehold.co/60' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true, avatarUrl: 'https://placehold.co/60' }]);
      // Here you would typically call an API to get the chatbot's response
      // For this example, we'll just echo the user's message
      setTimeout(() => {
        setMessages(msgs => [...msgs, { text: `You said: ${input}`, isUser: false, avatarUrl: 'https://placehold.co/60' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Train className="mr-2" />
          Railway Helper
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isUser={msg.isUser} avatarUrl={msg.avatarUrl} />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>
            <Send size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatbotInterface;