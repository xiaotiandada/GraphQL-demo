namespace SCHEMA {
  type Course = {
    title: string
    desc: string
    page: Int
    author: string
  }

  type Student = {
    name: string
    sex: string
    age: Int
    _id: ID
    info: Info
  }

  type QueryGetCourse = {
    getCourse: Course[]
  }

  type QueryGetStudent = {
    getStudent: Student[]
  }
}