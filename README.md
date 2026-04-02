<!-- Please update value in the {}  -->

<h1 align="center">Country Quiz | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/country-quizz" target="_blank">Country Quiz</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://country-quiz-thiago-thomas.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/country-quizz">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

This is an interactive country quiz application built with modern React. Users can test their geography knowledge by identifying countries from flags and capitals. The app provides immediate visual feedback, tracks progress through a series of 10 questions, and displays a final score on a congratulations page. The design is fully responsive, adapting to mobile, tablet, and desktop screens.

### What I learned

- Implementing quiz logic with React hooks (useState, useEffect) for state management
- Managing complex state for user answers, progress tracking, and visual feedback
- Creating responsive designs with CSS media queries and custom properties
- Using TypeScript interfaces for type safety in component props and data structures
- Applying BEM naming convention for organized and maintainable CSS
- Handling user interactions with proper state updates and timing (e.g., 1.5s feedback delay)
- Setting up a modern React project with Vite for fast development and building

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Essential for learning React hooks, components, and state management
- [Vite Documentation](https://vitejs.dev/guide/) - Helped set up the build tool and understand its configuration
- [DevChallenges Country Quiz](https://devchallenges.io/challenge/country-quizz) - The original challenge that inspired this project
- [Google Fonts - Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro) - Used for the typography in the application
- [React Router Documentation](https://reactrouter.com/en/main/start/tutorial) - For implementing client-side routing between pages

### Built with

- [React](https://reactjs.org/) - UI framework for building the interactive components
- [TypeScript](https://www.typescriptlang.org/) - Provides type safety and better development experience
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [React Router](https://reactrouter.com/) - For client-side routing between quiz and results pages
- CSS custom properties - For theme management and consistent styling
- Flexbox - For responsive layout and component positioning
- [ESLint](https://eslint.org/) - Code linting and quality assurance

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge. The key features include:

- **10-Question Geography Quiz**: Test knowledge with country flags and capital cities
- **Real-time Scoring**: Displays current score (X/10) in the header throughout the quiz
- **Immediate Visual Feedback**: Shows correct/wrong icons after each answer with a 1.5-second delay
- **Progress Tracking**: Numbered buttons indicate completed and current questions
- **Responsive Design**: Optimized for mobile (412px), tablet (1024px), and desktop (1350px) screens
- **Congratulations Page**: Displays final score with option to play again
- **Smooth User Experience**: Auto-advances to next question after feedback, with disabled states during transitions

## Acknowledgements

- [DevChallenges](https://devchallenges.io/) for providing the challenge and design inspiration
- React community and documentation for excellent resources
- Google Fonts for the Be Vietnam Pro typeface

## Author

- Website [country-quiz-thiago-thomas.netlify.app](https://country-quiz-thiago-thomas.netlify.app/)
- GitHub [@thiago-thomas](https://github.com/thiago-thomas)
