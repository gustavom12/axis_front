import { gql } from '@apollo/client';

const UserQueries = {
  REGISTER_STUDENT: gql`
    mutation(
      $course: ID!
      $fullname: String!
      $email: String!
      $profesor: ID
      $ppssww: String!
      $accessKey: String!
    ) {
      registerStudent(
        user: {
          fullname: $fullname
          course: $course
          email: $email
          profesor: $profesor
          ppssww: $ppssww
        }
        accessKey: $accessKey
      )
    }
  `,
  REGISTER_TEACHER: gql`
    mutation(
      $fullname: String!
      $cursos: [ID]!
      $email: String!
      $ppssww: String!
    ) {
      registerTeacher(
        user: {
          fullname: $fullname
          cursos: $cursos
          email: $email
          ppssww: $ppssww
        }
      )
    }
  `,
  GET_STUDENT: gql`
    query($id: ID!) {
      getStudent(id: $id) {
        _id
        image
        exp
        homework
        doneQuizes
        fullname
        course
        email
        userType
      }
    }
  `,
  getStudents: gql`
  query{
    getStudents{
      _id
      image
      exp
      homework
      doneQuizes
      fullname
      course
      email
      userType
    }
  }
`,
  GET_TEACHER: gql`
    query($email: String!) {
      getTeacher(email: $email) {
        id
        email
        cursos
        ppssww
        alumnos
        fullname
      }
    }
  `,
  GET_TEACHERs: gql`
  query {
    getTeachers{
      _id
      email
      ppssww
      alumnos
      fullname
      courses
      createdQuizes
      image
    }
  }
`,
  LOGIN: gql`
    query($email: String!) {
      Login(email: $email)
    }
  `,
  editProfile: gql`
    mutation($id: ID!, $url: String!, $fullname: String!) {
      editProfile(id: $id, url: $url, fullname: $fullname)
    }
  `,
};

export default UserQueries;
