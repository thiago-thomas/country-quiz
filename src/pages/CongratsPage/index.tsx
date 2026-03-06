import CongratsImg from "../../assets/congrats.png";
import "./style.css";

export function CongratsPage() {
  return (
    <>
      <div className="country-quiz__main-container congrats-container">
        <div className="country-quiz__congrats-header">
          <img src={CongratsImg} alt="Congrats Image" />
        </div>
        <div className="country-quiz__congrats-main">
          <h1>Congrats! You completed the quiz.</h1>
          <p>You answer 4/10 correctly</p>
          <button type="button" className="congrats-playAgain">
            Play again
          </button>
        </div>
      </div>
    </>
  );
}
