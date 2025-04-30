import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatMessage {
  text: string;
  isUser: boolean;
  time: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Hello! How can I help you today?",
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      text: message,
      isUser: true,
      time: formatTime()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');
    
    // Simulate response after a delay
    setTimeout(() => {
      const botMessage: ChatMessage = {
        text: "Thanks for your message! One of our team members will get back to you shortly.",
        isUser: false,
        time: formatTime()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={toggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
      
      <div className={cn(
        "absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="bg-primary-600 text-white p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Live Chat Support</h3>
            <button onClick={toggleChat} className="text-white hover:text-slate-200">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="h-80 overflow-y-auto p-4 bg-slate-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-4 ${msg.isUser ? 'justify-end' : ''}`}>
              {!msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
              
              <div className={cn(
                "p-3 rounded-lg shadow-sm max-w-[80%]",
                msg.isUser 
                  ? "mr-2 bg-primary-100" 
                  : "ml-2 bg-white"
              )}>
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-slate-500 mt-1">{msg.time}</p>
              </div>
              
              {msg.isUser && (
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="border-t border-slate-200 p-3">
          <form onSubmit={handleSubmit} className="flex">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <Button 
              type="submit" 
              className="bg-primary-600 text-white px-3 py-2 rounded-r-lg hover:bg-primary-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
