import { gql } from '@apollo/client';

const HomeworkQueries = {
  CreateMultipleChoice: gql`
    mutation($MultipleChoice: MultipleChoiceInput!) {
      createMultipleChoice(MultipleChoice: $MultipleChoice)
    }
  `,
  GetHomework: gql`
    query($id:ID!){
      getHomework(id:$id){
        title
        teacher
        description
        expires_date
        questions
        hwType
        _id
      }
    }
  `,
  GetHomeworksById: gql`
    query($ids: [ID!]!) {
      getMultipleChoicesIds(ids: $ids) {
        title
        description
        expires_date
        questions {
          title
        }
      }
    }
  `,
  getHomeworkDone: gql`
  query($id:ID!){
    getHomeworkDone(id:$id){
      title
      calification
      doneDate
      expires_date
    }
  }`,
  CreateHW: gql`
  mutation($homework:newHomework!){
    createHomework(homework:$homework)
  }`,
  doHomework: gql`
    mutation($homework:homeworkDoneInput){
      doHomework(homework:$homework)
    }
  `
};

export default HomeworkQueries;
