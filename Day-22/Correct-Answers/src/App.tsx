import { useState } from 'react';
import Question from './components/Question';

type QuestionType = {
  question: string;
  questionDescription: string;
  options: string[];
  answer: number[];
  explanation: string;
};

type QuestionVerdictType = {
  index: number;
  isCorrect: boolean;
};

const quizQuestions: QuestionType[] = [
  {
    question:
      'True or False: JavaScript is a statically-typed programming language.',
    questionDescription:
      'Statically-typed languages require variables to be declared with their data types before they can be used.',
    options: ['True', 'False'],
    answer: [1],
    explanation:
      'JavaScript is a dynamically-typed language, which means that variables do not have to be declared with their data types.',
  },
  {
    question:
      'Which of the following code snippets does not correctly declares a variable in JavaScript?',
    questionDescription: 'Consider the variable `x` that needs to be declared.',
    options: ['var x = 10;', 'const x = 10;', 'let x = 10;', 'int x = 10;'],
    answer: [3],
    explanation:
      'In JavaScript, variables can be declared using the `var`, `const`, or `let` keyword. The correct options are `var x = 10;`, `const x = 10;`, and `let x = 10;`.',
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(5 + '5');```",
    questionDescription: 'The code concatenates a number and a string.',
    options: ['55', '10', 'NaN', 'Error'],
    answer: [0],
    explanation:
      'When a number is concatenated with a string in JavaScript, the number is implicitly converted to a string and then concatenated. The correct option is `55`.',
  },
  {
    question:
      'True or False: JavaScript is a case-sensitive programming language.',
    questionDescription:
      'Case-sensitive languages distinguish between uppercase and lowercase letters.',
    options: ['True', 'False'],
    answer: [0],
    explanation:
      'JavaScript is a case-sensitive language, which means that uppercase and lowercase letters are treated differently.',
  },
  {
    question:
      'Which of the following code snippets correctly displays a message on the web page using JavaScript?',
    questionDescription:
      'Consider the HTML element with the id `message`. The JavaScript code should display a message inside this element.',
    options: [
      "document.getElementById('message').innerHTML = 'Hello, World!';",
      "document.querySelector('message').innerHTML = 'Hello, World!';",
      "document.getElementById('#message').innerHTML = 'Hello, World!';",
      "document.querySelector('.message').innerHTML = 'Hello, World!';",
    ],
    answer: [0],
    explanation:
      "To display a message on the web page using JavaScript, we need to select the HTML element with the appropriate id or tag name. The correct options are `document.getElementById('message').innerHTML = 'Hello, World!';` and `document.querySelector('#message').innerHTML = 'Hello, World!';`.",
  },
  {
    question:
      "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(10 < '5');```",
    questionDescription:
      'The code compares a number and a string using the less than operator.',
    options: ['true', 'false', 'NaN', 'Error'],
    answer: [1],
    explanation:
      'When comparing a number and a string in JavaScript, the string is converted to a number before the comparison is made. If the string cannot be converted to a valid number, the result is `NaN`. The correct option is `false`.',
  },
  {
    question:
      'True or False: JavaScript is an interpreted programming language.',
    questionDescription:
      'Interpreted languages execute code directly without compilation.',
    options: ['True', 'False'],
    answer: [0],
    explanation:
      'JavaScript is an interpreted language, which means that code is executed directly without the need for compilation.',
  },
  {
    question:
      'Which of the following code snippets does not correctly define a function in JavaScript?',
    questionDescription:
      'Consider the function `multiply` that takes two parameters `a` and `b` and returns their product.',
    options: [
      'function multiply(a, b) { return a * b; }',
      'var multiply = function(a, b) { return a * b; };',
      'const multiply = (a, b) => { return a * b; };',
      'int multiply(int a, int b) { return a * b; };',
    ],
    answer: [3],
    explanation:
      'In JavaScript, functions can be defined using the `function` keyword or as arrow functions. The correct options are `function multiply(a, b) { return a * b; }`, `var multiply = function(a, b) { return a * b; };`, and `const multiply = (a, b) => { return a * b; };`.',
  },
];

export default function StartAttempt() {
  const [questions] = useState<Array<QuestionType>>(quizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questionAttemptVerdictArray, setQuestionAttemptVerdictArray] =
    useState<QuestionVerdictType[]>([]);

  function answerQuestion(index: number) {
    const isCorrect = questions[currentQuestionIndex].answer.includes(index);

    setQuestionAttemptVerdictArray((arr) => [
      ...arr,
      { index: currentQuestionIndex, isCorrect },
    ]);

    setCurrentQuestionIndex((idx) => idx + 1);
  }

  const correctAnswers = questionAttemptVerdictArray.reduce(
    (acc, item) => (item.isCorrect ? acc + 1 : acc),
    0
  );

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <>
          <div className="mt-2">
            <p className="text-lg font-semibold text-end px-6">
              Correct Answers:{' '}
              <span data-testid="quiz-answer-counter">{correctAnswers}</span> /{' '}
              {questions.length}
            </p>
          </div>

          <div className="mx-5 mt-9">
            <p>Question: {currentQuestionIndex + 1}</p>
            <Question
              {...quizQuestions[currentQuestionIndex]}
              answerQuestion={answerQuestion}
            />
          </div>
        </>
      ) : (
        <>
          <div className="mx-auto w-1/2 text-center mt-24">
            <h3 className="text-2xl">Final Score</h3>
            <p className="text-6xl font-bold">
              <span data-testid="final-answer-counter">{correctAnswers}</span> /{' '}
              {questions.length}
            </p>
          </div>
        </>
      )}
    </>
  );
}
