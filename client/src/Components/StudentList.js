import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";


const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState("");
  console.log("studentList props", selectedStudent);
  const { loading, error, data } = useQuery(getStudents);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClick = (student)=> {
    
    setSelectedStudent(student);
  };
let filteredStudents = [];



for(let i = 0; i < data.students.length; i++){
  //console.log(data.students[i].class.name)
  if(data.students[i].class.name === "1FE1"){
    //console.log(data.students[i].name)
    filteredStudents.push(data.students[i])
  }
  
}
  
  return (
    
    <div>
      <ul id="student-list">
        {data.students.map((student) => (
          <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
        ))}
        
      </ul>
        <div>{
          selectedStudent ? <div>
            <StudentDetails student={selectedStudent} setStudent={setSelectedStudent} handleClick={handleClick}/>
           </div>
          : <p>No Student Selected</p>
          
        }
        </div>
      
    </div>
  );
};

export default StudentList;


{/*{filteredStudents.map((f)=> (
          <li key={f.id} onClick={(e) => handleClick(f)}>{f.name}</li>
        ))}*/}