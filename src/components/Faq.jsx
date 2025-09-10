import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const texts = [
  {
    question: 'O que é o Mentoria?',
    answer:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    question: 'Preciso pagar para usar?',
    answer:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    question: 'Como funciona a criação da mentoria?',
    answer:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    question: 'Posso mudar meus objetivos depois de criar a conta?',
    answer:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
  },
  {
    question: 'Qual a diferença entre o blog e a mentoria personalizada?',
    answer:
      'O blog traz dicas gerais sobre carreira, enquanto a mentoria é feita sob medida para os seus objetivos.',
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col items-center gap-4 pb-35">
      <h1 className="pb-12 text-4xl font-bold text-[#3F3D56]">
        Dúvidas Frequentes
      </h1>
      <div className="flex w-full max-w-2xl flex-col gap-4 p-5 lg:p-0">
        {texts.map((text, index) => (
          <Accordion
            key={index}
            className="!rounded-md border border-[#2C49FA] !shadow-none"
          >
            <AccordionSummary className="transition-colors hover:bg-gray-50">
              <Typography className="!font-bold !text-[#2C49FA]">
                {text.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="leading-relaxed">{text.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
