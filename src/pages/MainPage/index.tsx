export function MainPage() {
  return (
    <>
      <div className="country-quiz__header-container">
        <h1>Country Quiz</h1>
        <div className="country-quiz__header-container__points">
          <span>🏆</span>
          <span>4/10 Points</span>
        </div>
      </div>
      <div className="country-quiz__main-container">
        <div className="country-quiz__numbers-questions">
          <button type="button" className="answered">
            1
          </button>
          <button type="button" className="answered">
            2
          </button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">10</button>
        </div>
        <h2 className="country-quiz__question-text">
          Which country does this flag belong to?
        </h2>
        <div className="country-quiz__options-container">
          <button type="button" className="selected">
            Sweden
          </button>
          <button type="button">Vietnam</button>
          <button type="button">Finland</button>
          <button type="button">Austria</button>
        </div>
      </div>
    </>
  );
}
