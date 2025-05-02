import { useState } from 'react';

type QuestionType = {
  question: string;
  questionDescription: string;
  options: string[];
  answer: number[];
  explanation: string;
  answerQuestion: (index: number) => void;
};

export default function Question({
  question,
  questionDescription,
  options,
  explanation,
  answerQuestion,
}: QuestionType) {
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <>
      <div>
        <h3 className="text-3xl font-bold">{question}</h3>

        <p className="text-lg text-gray-800 mt-2">{questionDescription}</p>
        <div className="flex flex-col items-start gap-2 w-full mt-6">
          {options.map((optionText, index) => {
            return (
              <button
                key={index}
                onClick={() => answerQuestion(index)}
                className="rounded-md border-2 px-4 py-2 w-full hover:bg-gray-200">
                {optionText}
              </button>
            );
          })}
        </div>

        {isAnswered ? (
          <>
            <p>{explanation}</p>
          </>
        ) : null}
      </div>
    </>
  );
}
