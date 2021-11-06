import React from "react";
import DeleteStudent from "./DeleteStudent"
import EditStudent from "./EditStudent";


const StudentDetails = ( props )=> {
    const {setStudent} = props.setStudent;
    console.log("student details props",props);
    
    return (
        <div id="student-details" >
            <h2>Name: {props.student.name}</h2>
            <h3>Age: {props.student.age}</h3>
            <h3>Class: {props.student.class.name}</h3>
            <h3>Test 1 Score: {props.student.test1}</h3>
            <EditStudent student={props.student} setStudent={props.setStudent} handleClick={props.handleClick}/>
            <DeleteStudent id={props.id} student={props.student} setStudent={props.setStudent} />
        </div>
        
    )
    
}

export default StudentDetails;