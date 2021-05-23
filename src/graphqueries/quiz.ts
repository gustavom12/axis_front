import { gql } from '@apollo/client';

const QuizQueries = {
  createQuiz: gql`
    mutation ($Quiz: QuizInput!) {
      createQuiz(Quiz: $Quiz)
    }
  `,
  getQuizes: gql`
    query {
      getQuizes {
        title
        description
        dificulty
        imagePresentation
        _id
      }
    }
  `,
  getQuiz: gql`
    query ($id: ID!,$userEmail:String) {
      getQuiz(id: $id, userEmail: $userEmail) {
        title
        description
        _id
        dificulty
        imagePresentation
        type
        isAlreadyPayed
        isAlreadyDone
        isStarted
        teacher
        pages {
          title
          Number
          alreadyDone
          isCorrect
          type
          question {
            value
            type
            Number
          }
          options {
            value
            isCorrect
            Number
            isSelected
          }
        }
      }
    }
  `,
  doQuiz: gql`
    mutation ($Quiz: doneQuizInput!, $student: ID!, $quizId: ID!) {
      doQuiz(Quiz: $Quiz, student: $student, quizId: $quizId) {
        title
        _id
        description
        dificulty
        imagePresentation
        type
        teacher
        isAlreadyPayed
        isAlreadyDone
        isStarted
        pages {
          title
          Number
          alreadyDone
          isCorrect
          type
          question {
            value
            type
            Number
          }
          options {
            value
            isCorrect
            Number
            isSelected
          }
        }
      }
    }
  `,
  finishQuiz: gql`
    mutation($student: ID!, $doneQuizId: ID!, $expWon: Int! ){
      finishQuiz(student: $student, doneQuizId: $doneQuizId, expWon: $expWon )
    }
  `
};
export default QuizQueries;
