import { gql } from '@apollo/client';

const HomeworkQueries = {
  CreateMultipleChoice: gql`
    mutation($MultipleChoice: MultipleChoiceInput!){
    createMultipleChoice(MultipleChoice:$MultipleChoice)
}
  `
}

export default HomeworkQueries
