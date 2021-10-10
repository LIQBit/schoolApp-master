import React from "react";
//import { useQuery } from "@apollo/client";
//import { getStudentQuery } from "../queries/index";


const StudentDetails = (props)=> {
   
    //console.log(props)
    
    
    return (
        <div id="student-details">
            <h2>Name: {props.student.name}</h2>
            <h3>Age: {props.student.age}</h3>
            <h3>Class: {props.student.class.name}</h3>
            <h3>Test 1 Score: {props.student.test1}</h3>
        </div>
    )
}

export default StudentDetails;