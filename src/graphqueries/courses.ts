import { gql } from '@apollo/client';

const CoursesQueries = {
  createCourse: gql`
    mutation ($Course: newCourse!) {
      createCourse(Course: $Course)
    }
  `,
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
    query ($ids: [ID!]!) {
      getCoursesById(ids: $ids) {
        Students
        homeworks
        Teachers
        name
      }
    }
  `,
  GET_COURSE: gql`
    query ($id: ID!) {
      getCourse(id: $id) {
        Students
        Teachers
        name
        homeworks
      }
    }
  `,
};

export default CoursesQueries;
