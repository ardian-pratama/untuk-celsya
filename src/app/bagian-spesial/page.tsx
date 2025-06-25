'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

interface ChatItem {
  from: 'left' | 'right';
  text: string;
}

const questions = [
  {
    question: 'Celsya suka sama ku?',
    options: ['Suka', 'Gak suka'],
  },
  {
    question: 'Celsya betul² suka sama ku?',
    options: ['Iya', 'Engga'],
  },
  {
    question: 'Serius suka sama ku?',
    options: ['Iya', 'Engga'],
  },
  {
    question: 'Serius suka sama ku?',
    options: ['Iya Ardiannnn', 'Engga'],
  },
  {
    question: 'Celsya mau jadi cewe ku?',
    options: ['Mau', 'Engga Bangeet'],
  },
];

export default function Page() {
  const [chat, setChat] = useState<ChatItem[]>([
    { from: 'left', text: questions[0].question },
  ]);
  const [step, setStep] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [hideButtons, setHideButtons] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleAnswer = (answer: string, optionIndex: number) => {
    if (optionIndex === 0) {
      const userReply: ChatItem = { from: 'right', text: answer };
      const nextStep = step + 1;
      const newChat: ChatItem[] = [...chat, userReply];

      if (nextStep < questions.length) {
        newChat.push({ from: 'left', text: questions[nextStep].question });
      }

      setChat(newChat);
      setStep(nextStep);
      setClickCount(0);
    }

    if (optionIndex === 1) {
      const newCount = clickCount + 1;

      if (newCount >= 10) {
        setHideButtons(true);
        toast('Celsya pasti dah punya cowo karena nolak aku terus ☹️');
      }

      setClickCount(newCount);
    }
  };

  // Efek setelah semua pertanyaan selesai
  useEffect(() => {
    if (step >= questions.length && !showFinalMessage) {
      // Tambahkan pesan akhir
      setChat((prevChat): ChatItem[] => [
        ...prevChat,
        { from: 'left', text: 'yeaay akhirnya di terima celsya' },
      ]);
      setShowFinalMessage(true);

      // Mulai loop ❤️
      const interval = setInterval(() => {
        setChat((prevChat): ChatItem[] => [
          ...prevChat,
          { from: 'left', text: '❤️' },
        ]);
      }, 200);

      return () => clearInterval(interval); // tidak dihentikan karena tidak akan terpanggil
    }
  }, [step, showFinalMessage]);

  const shrinkScale = Math.max(0, 1 - clickCount * 0.1);

  return (
    <div className='p-5 md:p-10 container mx-auto flex flex-col gap-5 max-w-md'>
      {chat.map((item, index) => (
        <div
          key={index}
          className={`flex gap-2 ${
            item.from === 'right' ? 'justify-end' : 'justify-start'
          }`}
        >
          {item.from === 'left' && (
            <div className='bg-black rounded-full w-10 h-10'></div>
          )}
          <p
            className={`p-2 rounded-md border shadow max-w-[75%] ${
              item.from === 'right'
                ? 'bg-pink-300 text-white self-end'
                : 'bg-white'
            }`}
          >
            {item.text}
          </p>
        </div>
      ))}

      {!hideButtons && step < questions.length && (
        <div className='flex justify-center gap-4 flex-wrap'>
          <Button onClick={() => handleAnswer(questions[step].options[0], 0)}>
            {questions[step].options[0]}
          </Button>
          <Button
            onClick={() => handleAnswer(questions[step].options[1], 1)}
            variant='destructive'
            style={{
              transform: `scale(${shrinkScale})`,
              transition: 'transform 0.2s ease',
              opacity: shrinkScale <= 0 ? 0 : 1,
              pointerEvents: shrinkScale <= 0 ? 'none' : 'auto',
            }}
          >
            {questions[step].options[1]}
          </Button>
        </div>
      )}
      <Toaster position='top-right' />
    </div>
  );
}