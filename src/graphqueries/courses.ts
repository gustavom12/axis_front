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
};

export default CoursesQueries;
