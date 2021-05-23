import { gql } from '@apollo/client';

const NotificationQueries = {
  createNotification: gql`
    mutation($notification:notificationInput, $student:ID!){
      createNotification(notification:$notification, student:$student)
    }
  `,
  getNotification: gql`
    query($id:ID!){
      getNotification(id:$id){
        _id
        title
        description
        img
        to
        date
        type
      }
    }
  `
}

export default NotificationQueries
