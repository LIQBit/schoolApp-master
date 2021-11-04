import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";


const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState(""); // set state for studentDetails app
  const [list, setList] = useState('') // set state for displaying/hiding student lists
  const { loading, error, data } = useQuery(getStudents);

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClick = (student)=> {
    setSelectedStudent(student);
  };

  let allStudents = [];

  for(let i = 0; i < data.students.length; i++){
    allStudents.push(data.students[i])
  }

  
  let oneFE1Students = [];
  let oneFE2Students = [];
  let twoFEStudents = [];
  let threeFEStudents = [];
  let classLists = 
      [ {name: "allStudents", members: allStudents},
        {name: "oneFE1Students", members: oneFE1Students},
        {name: "oneFE2Students", members: oneFE2Students},
        {name: "twoFEStudents", members: twoFEStudents},
        {name: "threeFEStudents", members: threeFEStudents}
        ];


  for(let i = 0; i < data.students.length; i++){
    if(data.students[i].class.name === "1FE1"){
      oneFE1Students.push(data.students[i])
    } else if (data.students[i].class.name === "1FE2"){
      oneFE2Students.push(data.students[i])
    } else if (data.students[i].class.name === "2FE"){
      twoFEStudents.push(data.students[i])
    } else if (data.students[i].class.name === "3FE"){
      threeFEStudents.push(data.students[i])
    }
  }
  
  
  return (
    
    <div>
      {
        classLists.map(classList => (
          <button type="button"
                  key={classList.name}
                  onClick={()=> setList(classList.name)}
          >
          {classList.name}
          </button>
        ))
      }

      <div id="all-list">
        {
          list === "allStudents"? 
          <ul id="student-list">
            <h3>All Students</h3>
            {data.students.map((student) => (
              <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
            ))}
          </ul>
          : null
        }
      </div>
      
      <div id="1fe-list">
        {
          list === "oneFE1Students"?
          <ul id="student-list">
          <h3>1FE1 Students</h3>
          {oneFE1Students.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }
        
      </div>
      
      <div id="1fe2-list">
        {
          list === "oneFE2Students"?
          <ul id="student-list">
          <h3>1FE2 Students</h3>
          {oneFE2Students.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }
        
      </div>
      
      <div id="2fe-list">
        {
          list === "twoFEStudents"?
          <ul id="student-list">
          <h3>2FE Students</h3>
          {twoFEStudents.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }  
      </div>
      
      <div id="3fe-list">
        {
          list === "threeFEStudents"?
          <ul id="student-list">
          <h3>3FE Students</h3>
          {threeFEStudents.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }
      </div>

      <div>{
        selectedStudent ? 
        <div>
          <StudentDetails key={selectedStudent.id}
            id={selectedStudent.id}
            student={selectedStudent}
            setStudent={setSelectedStudent}
            handleClick={handleClick}/>
          </div>
        : <p>No Student Selected</p>
      }
      </div>
    </div>

    
  );
};

export default StudentList;
