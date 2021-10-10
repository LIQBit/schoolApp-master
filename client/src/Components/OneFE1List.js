import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";


const OneFE1List = () => {
  const [student, setStudent] = useState("");
  
  const { loading, error, data } = useQuery(getStudents);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClick = (student)=> {
    //console.log(student)
  
    setStudent(student);
  };
let filteredStudents = [];

//console.log(data.students)

for(let i = 0; i < data.students.length; i++){
  //console.log(data.students[i].class.name)
  if(data.students[i].class.name === "1FE1"){
    //console.log(data.students[i].name)
    filteredStudents.push(data.students[i])
  }
  
}

console.log(filteredStudents);
  
  return (
    <div>
      <ul id="student-list">
      {filteredStudents.map((f)=> (
          <li key={f.id} onClick={(e) => handleClick(f)}>{f.name}</li>
      ))}
        
      </ul>
      {
        student ? <StudentDetails student={student} /> 
        : <p>No Student Selected</p>
      }
    </div>
  );
};

export default OneFE1List;