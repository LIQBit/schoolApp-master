import { gql } from "@apollo/client";

const getStudents = gql`
  {
    students {
      name
      age
      test1
      id
      class{
        name
      }
    }
  }
`;

const getClassesQuery = gql`
  {
    classes {
      name
      id
    }
  }
`;

const addStudentMutation = gql`
  mutation addStudent(
    $name: String!
    $age: String!
    $classId: ID!
    $test1: String!
  ) {
    addStudent(name: $name, age: $age, classId: $classId, test1: $test1) {
      name
    }
  }
`;

const getStudentQuery = gql`
  query($id: ID){
    student(id: $id){
      id
      name
      age
      test1
      class{
        id
        name
        year
        students{
          name
          id
        }
      }
    }
  }
`

export { getClassesQuery, getStudents, addStudentMutation, getStudentQuery };
