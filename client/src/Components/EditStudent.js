import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
//import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";
import { editStudentMutation, getStudentQuery, getStudents } from "../queries/index";


const EditStudent = ( props ) => {
    console.log("props", props)
    const [name, setName] = useState(); 
    const [age, setAge] = useState();
    const [test, setTest] = useState();
    const [editStudent] = useMutation(editStudentMutation);
    const thisStudent = {id: props.student.id, name: name, age: age, class: props.student.class, test1: test};

    {/*const handleSubmit = (e) => {
        e.preventDefault();
        editStudent({
            variables: {
                id: selectedStudent.student.student.id,
                name: name,
                age: age,
                test1: test
            }
        })
        const aStudent = e.target.value;
        console.log(aStudent)
    setSelectedStudent(prevStudent => [...prevStudent, aStudent]);
    }*/}


    
    return (
    
        <form id="edit-student" 
            onSubmit={(e) => {
                e.preventDefault();
                editStudent({
                variables: {
                    id: props.student.id,
                    name: name,
                    age: age,
                    test1: test
                },
                refetchQueries: [{ query: getStudents}]
                })
                props.setStudent(thisStudent);
                props.handleClick(thisStudent);
                
            }}>
            
            <div className="field" onChange={(e) => setName(e.target.value)}>
                <label>Student Name:</label>
                <input type="text"
                 value={name}/>
            </div>
            <div className="field" onChange={(e) => setAge(e.target.value)}>
                <label>Age:</label>
                <input type="text"
                 value={age}/>
            </div>
            <div className="field" onChange={(e) => setTest(e.target.value)}>
                <label>Test One:</label>
                <input type="text"
                 value={test}/>
            </div>
            <button type="submit" >submit</button>
        </form>
    )
}

export default EditStudent;