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

const deleteStudentMutation = gql`
  mutation deleteStudent(
    $id: ID!
  ) {
    deleteStudent(id: $id){
      id
    }
  }
`;

const editStudentMutation = gql`
  mutation editStudent(
    $id: ID!
    $name: String!
    $age: String!
    $test1: String!
  ) {
    editStudent(id: $id, name: $name, age: $age, test1: $test1){
      name
      age
      test1
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

export { getClassesQuery, getStudents, addStudentMutation, getStudentQuery, deleteStudentMutation, editStudentMutation };
