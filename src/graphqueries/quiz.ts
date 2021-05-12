import { gql } from '@apollo/client';

const QuizQueries = {
  createQuiz: gql`
    mutation ($Quiz: QuizInput!) {
      createQuiz(Quiz: $Quiz)
    }
  `,
};
export default QuizQueries;
