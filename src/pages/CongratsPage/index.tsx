import CongratsImg from "../../assets/congrats.png";
import "./style.css";
import { Link, useLocation } from 'react-router-dom'; 

export function CongratsPage() {
  const location = useLocation();
  const { correctAnswers } = location.state || { correctAnswers: 0 };

  return (
    <>
      <div className="country-quiz__main-container congrats-container">
        <div className="country-quiz__congrats-header">
          <img src={CongratsImg} alt="Congrats Image" />
        </div>
        <div className="country-quiz__congrats-main">
          <h1>Congrats! You completed the quiz.</h1>
          <p>You answered {correctAnswers}/10 correctly</p>
          <Link to="/">
            <button type="button" className="congrats-playAgain">
              Play again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
