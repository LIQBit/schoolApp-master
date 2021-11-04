import React from "react";
import { useEffect, useState } from "react";
import { getStudentQuery } from "../queries";
import { useQuery } from "@apollo/client";
import DeleteStudent from "./DeleteStudent"
import EditStudent from "./ClassEditStudent";


const ClassStudentDetails = ( student )=> {
    const [thisStudent, setThisStudent] = useState(student);
    const handleClick = (student)=> {
        setThisStudent(student);
      };
    
    console.log("student details props", student);
    
    return (
        <div id="student-details" >
            <h2>Name: {student.student.name}</h2>
            <h3>Age: {student.student.age}</h3>
            <h3>Class: {student.student.class.name}</h3>
            <h3>Test 1 Score: {student.student.test1}</h3>
            <EditStudent student={thisStudent} setStudent={setThisStudent} handleClick={handleClick} />
            <DeleteStudent id={student.student.id}/>
        </div>
        
    )
    
}

export default ClassStudentDetails;