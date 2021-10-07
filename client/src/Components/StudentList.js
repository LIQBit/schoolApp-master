import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";


const StudentList = () => {
  const [student, setStudent] = useState("");
  
  const { loading, error, data } = useQuery(getStudents);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClick = (student)=> {
    //console.log(student)
  
    setStudent(student);
  };

  

  
  return (
    <div>
      <ul id="student-list">
        {data.students.map((student) => (
          <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
        ))}
      </ul>
      {
        student ? <StudentDetails student={student} /> 
        : <p>No Student Selected</p>
      }
    </div>
  );
};

export default StudentList;
