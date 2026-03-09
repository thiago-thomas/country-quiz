import { useEffect, useState } from "react";
import CorrectIcon from "../../assets/correct-icon.svg";
import WrongIcon from "../../assets/wrong-icon.svg";
import "./style.css";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  flag: string;
}

interface UserAnswer {
  answerIndex: number;
  isCorrect: boolean;
}

export function MainPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(UserAnswer | undefined)[]>(
    [],
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    // Fetch quiz questions from an API or use hardcoded questions
    const quizQuestions = [
      {
        id: 1,
        question: "Which country does this flag belong to?",
        options: ["Sweden", "Vietnam", "Finland", "Austria"],
        correctAnswer: 2,
        flag: "🇫🇮",
      },
      {
        id: 2,
        question: "What is the capital of France?",
        options: ["Lyon", "Paris", "Marseille", "Nice"],
        correctAnswer: 1,
        flag: "🇫🇷",
      },
      {
        id: 3,
        question: "Which country has this flag?",
        options: ["Spain", "Portugal", "Italy", "Greece"],
        correctAnswer: 0,
        flag: "🇪🇸",
      },
      {
        id: 4,
        question: "Where is Tokyo located?",
        options: ["South Korea", "China", "Japan", "Thailand"],
        correctAnswer: 2,
        flag: "🇯🇵",
      },
      {
        id: 5,
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Salvador", "Brasília", "São Paulo"],
        correctAnswer: 2,
        flag: "🇧🇷",
      },
      {
        id: 6,
        question: "Which country has this flag?",
        options: ["India", "Ireland", "Italy", "Iceland"],
        correctAnswer: 2,
        flag: "🇮🇹",
      },
      {
        id: 7,
        question: "What is the capital of Germany?",
        options: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
        correctAnswer: 1,
        flag: "🇩🇪",
      },
      {
        id: 8,
        question: "Which country has this flag?",
        options: ["Mexico", "Denmark", "Switzerland", "Chile"],
        correctAnswer: 0,
        flag: "🇲🇽",
      },
      {
        id: 9,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
        flag: "🇦🇺",
      },
      {
        id: 10,
        question: "Which country has this flag?",
        options: ["Canada", "United States", "Iceland", "Denmark"],
        correctAnswer: 0,
        flag: "🇨🇦",
      },
    ];
    setQuestions(quizQuestions);
  }, []);

  function handleAnswer(answerIndex: number): void {
    const currentQ = questions[currentQuestion];
    const isCorrect = answerIndex === currentQ.correctAnswer;

    setSelectedAnswer(answerIndex);
    setAnswered(true);

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = { answerIndex, isCorrect };
    setUserAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 3000);
  }

  function handleFinishQuiz(): void {
    setShowResult(true);
  }

  if (showResult) {
    const correctAnswers = userAnswers.filter(
      (answer) => answer?.isCorrect,
    ).length;
    return (
      <div className="country-quiz__result-container">
        <h1>Quiz Completed!</h1>
        <p>
          You got {correctAnswers} out of {questions.length} correct!
        </p>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const correctAnswersCount = userAnswers.filter(
    (answer) => answer?.isCorrect,
  ).length;

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="country-quiz__header-container">
        <h1>Country Quiz</h1>
        <div className="country-quiz__header-container__points">
          <span>🏆</span>
          <span>
            {correctAnswersCount}/{questions.length} Points
          </span>
        </div>
      </div>
      <div className="country-quiz__main-container">
        <div className="country-quiz__numbers-questions">
          {questions.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                userAnswers[index] !== undefined
                  ? "answered"
                  : index === currentQuestion
                    ? "current"
                    : ""
              }
              //onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="country-quiz__flag-question">
          <div className="flag">{currentQ.flag}</div>
          <h2 className="country-quiz__question-text">{currentQ.question}</h2>
        </div>
        <div className="country-quiz__options-container">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === currentQ.correctAnswer;

            return (
              <button
                key={index}
                type="button"
                disabled={answered}
                className={isSelected ? "selected" : ""}
                onClick={() => handleAnswer(index)}
              >
                <span>{option}</span>
                {answered && isCorrectOption && (
                  <img src={CorrectIcon} alt="Correct Icon" />
                )}
                {answered && isSelected && !isCorrectOption && (
                  <img src={WrongIcon} alt="Wrong Icon" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
