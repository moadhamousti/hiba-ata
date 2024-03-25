"use client"

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const faqData = [
  {
    question: "Quel type d'équipements médicaux puis-je trouver sur ce site ?",
    answer: "Notre site propose une variété d'équipements médicaux tels que des fauteuils roulants, des béquilles, des lits médicalisés, des déambulateurs, des appareils respiratoires, et bien plus encore. Nous faisons de notre mieux pour inclure une large gamme d'équipements pour répondre aux besoins divers de notre communauté."
  },
  {
    question: "Qui peut bénéficier de ces équipements médicaux gratuits ?",
    answer: "Nos services sont disponibles pour toute personne ayant besoin d'équipements médicaux, qu'il s'agisse de patients, de personnes âgées, de personnes handicapées, ou de toute autre personne nécessitant ces équipements. Notre objectif est d'aider ceux qui en ont besoin à accéder à ces ressources gratuitement."
  },
  {
    question: "Comment puis-je trouver des équipements médicaux sur ce site ? ",
    answer: "Vous pouvez utiliser notre fonction de recherche avancée pour trouver des équipements médicaux en fonction de vos besoins spécifiques. Vous pouvez filtrer les résultats par type d"
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

