import React, { useState } from 'react';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyClick: () => void;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose, onApplyClick }) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'advisor' | 'user'; text: string; time: string }>>([
    {
      sender: 'advisor',
      text: "Hello! I'm Tanvi (IIT Bombay '20), Lead Academic Advisor at CodeMyWay. Are you looking to transition into data analytics, or do you have questions regarding our line-by-line PR reviews and IIT faculty mentoring?",
      time: 'Just now'
    }
  ]);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userText = question.trim();
    setQuestion('');
    const newMsg = {
      sender: 'user' as const,
      text: userText,
      time: 'Just now'
    };
    setMessages((prev) => [...prev, newMsg]);
    setSending(true);

    setTimeout(() => {
      let reply = "Thanks for asking! Our cohorts are strictly capped at 30 engineers per faculty mentor to ensure every line of your code receives direct feedback. Would you like me to book your 20-minute diagnostic session with one of our lead IIT instructors?";
      if (userText.toLowerCase().includes('eligibility') || userText.toLowerCase().includes('background')) {
        reply = "We accept both non-tech professionals transitioning into data roles and junior software engineers. What matters is your mathematical curiosity and dedication to rigorous code reviews.";
      } else if (userText.toLowerCase().includes('fee') || userText.toLowerCase().includes('scholarship')) {
        reply = "Our tuition has merit fellowships up to 40% based on the IIT Technical Diagnostic Test. We also offer 0% interest EMI options starting at ₹5,200/month.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'advisor',
          text: reply,
          time: 'Just now'
        }
      ]);
      setSending(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#0b1229] border border-[#2d344c] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-[#141a32] border-b border-[#222941] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                alt="Tanvi Deshmukh"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#4cd7f6]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pWw1xx4GOhbuPMtQK9JvueXWnadEg-R3iCYaa9FP4Q9KL10W5jr0yb8_jgi_sDYJ4cFKRyd4_rX5mJWjR0xkwBwsyt-myjxFtQOiWowsqyliAHCj2FsEy_Qp9M1bT3KaOB5IMJlaK8hhsvsZtJy_sMUcUILaqlzh0AR8FVbUpcNmQyogaGSBtBXNW6PDIQZnNd4xEVE-p2HBVNJaEPBL-0qYUy4HI6YyD2ixGaivw02cnqw4kvlN"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4edea3] rounded-full ring-2 ring-[#0b1229]"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#dce1ff]">
                  Tanvi Deshmukh
                </h4>
                <span className="px-1.5 py-0.5 rounded bg-[#181e36] text-[#4edea3] font-['JetBrains_Mono'] text-[9px] font-bold">
                  IIT BOMBAY
                </span>
              </div>
              <p className="font-['Inter'] text-[11px] text-[#869397]">
                Senior Academic Advisor • Live Online
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#869397] hover:text-[#dce1ff] hover:bg-[#222941] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Message Thread */}
        <div className="p-4 space-y-3 h-72 overflow-y-auto bg-[#060d24]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-xl text-xs font-['Inter'] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#4cd7f6] text-[#003640] rounded-br-none font-medium'
                    : 'bg-[#181e36] text-[#dce1ff] rounded-bl-none border border-[#222941]'
                }`}
              >
                {m.text}
              </div>
              <span className="font-['JetBrains_Mono'] text-[9px] text-[#869397] mt-1 px-1">
                {m.time}
              </span>
            </div>
          ))}
          {sending && (
            <div className="flex items-center gap-1.5 text-xs text-[#869397] font-['JetBrains_Mono']">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-bounce [animation-delay:0.4s]"></span>
              <span className="ml-1 text-[10px]">Tanvi is typing...</span>
            </div>
          )}
        </div>

        {/* Action input */}
        <form onSubmit={handleSend} className="p-3 bg-[#141a32] border-t border-[#222941] flex gap-2">
          <input
            type="text"
            placeholder="Ask about curriculum, JEE mentors, or scholarships..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-3 py-2 rounded bg-[#0b1229] text-xs text-[#dce1ff] border border-[#222941] focus:outline-none focus:border-[#4cd7f6]"
          />
          <button
            type="submit"
            className="px-3 py-2 rounded bg-[#4cd7f6] text-[#003640] font-['JetBrains_Mono'] text-xs font-bold hover:bg-[#89ceff] transition-colors"
          >
            Send
          </button>
        </form>

        <div className="px-4 py-2.5 bg-[#0e1630] border-t border-[#181e36] flex items-center justify-between text-xs">
          <span className="font-['Inter'] text-[11px] text-[#869397]">
            Want a complete review of your resume?
          </span>
          <button
            onClick={() => {
              onClose();
              onApplyClick();
            }}
            className="text-[#4cd7f6] hover:underline font-['JetBrains_Mono'] text-[11px] font-semibold"
          >
            Book Free Screening →
          </button>
        </div>
      </div>
    </div>
  );
};
