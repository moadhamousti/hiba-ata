"use client"

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const faqData = [
  {
    question: 'What is this website about ?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta, iste sit cumque, odit sequi fugit repellat pariatur incidunt omnis doloremque nisi similique voluptate praesentium nulla ipsum, eligendi illo necessitatibus.'
  },
  {
    question: 'How can I contact support?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta, iste sit cumque, odit sequi fugit repellat pariatur incidunt omnis doloremque nisi similique voluptate praesentium nulla ipsum, eligendi illo necessitatibus.'
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dicta, iste sit cumque, odit sequi fugit repellat pariatur incidunt omnis doloremque nisi similique voluptate praesentium nulla ipsum, eligendi illo necessitatibus.'
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="m-auto mt-8 flex flex-col items-center">
      <div className="text-6xl text-center font-bold">
        FAQs
      </div>
      {faqData.map((faq, index) => (
        <div key={index} className={`max-w-max mt-8 pb-16  border-b-2 border-gray-200 cursor-pointer p-4 ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl text-[--TextColor] font-semibold">{faq.question}</h3>
            <div className={`transition-transform duration-500 ease-in ${activeIndex === index ? 'rotate-180' : ''}`}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'h-auto opacity-100 translate-y-0' : 'h-0 opacity-0 -translate-y-4'}`}>
            <p className="pt-4 leading-6 text-lg  text-[--softTextColor]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;

