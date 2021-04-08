import { gql } from '@apollo/client';

const UserQueries = {
  REGISTER_STUDENT: gql`
    mutation(
      $curso: ID!
      $fullname: String!
      $email: String!
      $profesor: ID
      $ppssww: String!
    ) {
      registerStudent(
        user: {
          fullname: $fullname
          curso: $curso
          email: $email
          profesor: $profesor
          ppssww: $ppssww
        }
      )
    }
  `,
  REGISTER_TEACHER: gql`
  mutation($fullname:String!,$cursos:[ID]!,$email:String!,$ppssww:String!){
    registerTeacher(user:{
      fullname: $fullname
      cursos: $cursos
      email: $email
      ppssww: $ppssww
    })
  }`,
  GET_STUDENT: gql`
    query($email: String!) {
      getStudent(email: $email) {
        id
        email
        curso
        ppssww
        profesor
        fullname
      }
    }
  `,
  GET_TEACHER: gql`
    query ($email: String!){
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
  LOGIN: gql`query($email:String!){
    Login(email:$email)
  }`,
};

export default UserQueries;
