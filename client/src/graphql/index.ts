import { gql } from '@apollo/client'

export const GET_COURSE = gql`
  query {
    getCourse {
      title,
      author,
      page
    }
  }
`

export const GET_STUDENT = gql`
  query {
    getStudent {
      name,
      sex,
      age,
      _id
    }
  }
`

export const GET_ALL = gql`
  query {
    getCourse {
      title,
      author,
      page
    }
    getStudent {
      name,
      sex,
      age,
      _id
    }
  }
`
export const ADD_COURSE = gql`
  mutation AddCourse($title: String!, $desc: String!,  $author: String!, $page: Int!) {
    addCourse(
      post: {title: $title, desc: $desc, author: $author, page: $page}
    ) {
      title,
      desc,
      author,
      page
    }
  }
`

export const ADD_STUDENT = gql`
  mutation AddStudent($name: String!, $sex: String!, $age: Int!) {
    addStudent(post: {
      name: $name, sex: $sex, age: $age
    }) {
      name,
      sex,
      age,
      _id
    }
  }
`