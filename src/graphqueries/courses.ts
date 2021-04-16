import { gql } from '@apollo/client';

const CoursesQueries = {
  GET_COURSES: gql`
    query {
      getCourses {
        _id
        name
        Students
        Teachers
      }
    }
  `,
  GET_COURSES_BY_IDS: gql`
    query($ids: [ID!]!) {
      getCoursesById(ids: $ids) {
        Students
        homeworks
        Teachers
      }
    }
  `,
};

export default CoursesQueries;
