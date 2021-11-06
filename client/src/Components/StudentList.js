import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";
import NavBar from "./NavBar";


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

  // Individual class list variables
  let oneFE = [];
  let oneFE2 = [];
  let twoFE = [];
  let threeFE = [];
  let classLists = 
      [ {name: "allStudents", members: allStudents},
        {name: "oneFE", members: oneFE},
        {name: "oneFE2", members: oneFE2},
        {name: "twoFE", members: twoFE},
        {name: "threeFE", members: threeFE}
        ];


  for(let i = 0; i < data.students.length; i++){
    if(data.students[i].class.name === "1FE1"){
      oneFE.push(data.students[i])
    } else if (data.students[i].class.name === "1FE2"){
      oneFE2.push(data.students[i])
    } else if (data.students[i].class.name === "2FE"){
      twoFE.push(data.students[i])
    } else if (data.students[i].class.name === "3FE"){
      threeFE.push(data.students[i])
    }
  }
  
  
  return (
    <div>
      <div className="class-buttons">
        {
          classLists.map(classList => (
            
              <button type="button"
                      className="main-buttons"
                      key={classList.name}
                      onClick={()=> setList(classList.name)}
              >
              {classList.name}
              </button>
          
          ))
        }
      </div>

      <div className="class-list">
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
      
      <div className="class-list">
        {
          list === "oneFE"?
          <ul id="student-list">
          <h3>1FE1 Students</h3>
          {oneFE.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }
        
      </div>
      
      <div className="class-list">
        {
          list === "oneFE2"?
          <ul id="student-list">
          <h3>1FE2 Students</h3>
          {oneFE2.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }
        
      </div>
      
      <div className="class-list">
        {
          list === "twoFE"?
          <ul id="student-list">
          <h3>2FE Students</h3>
          {twoFE.map((student) => (
            <li key={student.id} onClick={(e) => handleClick(student)}>{student.name}</li>
          ))}
        </ul>
        : null
        }  
      </div>
      
      <div className="class-list">
        {
          list === "threeFE"?
          <ul id="student-list">
          <h3>3FE Students</h3>
          {threeFE.map((student) => (
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
