import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
//import { getStudents } from "../queries";
import StudentDetails from "./StudentDetails";
import { editStudentMutation, getStudentQuery, getStudents } from "../queries/index";


const EditStudent = ( props ) => {
    //console.log("props", props)
    const [name, setName] = useState(); 
    const [age, setAge] = useState();
    const [test, setTest] = useState();
    const [editStudent] = useMutation(editStudentMutation);
    const thisStudent = {id: props.student.id, name: name, age: age, class: props.student.class, test1: test};

    
    return (
        <div id="edit-form">
            <h4>Edit Student</h4>
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
                    
                    <input type="text"
                    value={name}
                    placeholder="Name"/>
                </div>
                <div className="field" onChange={(e) => setAge(e.target.value)}>
                    
                    <input type="text"
                    value={age}
                    placeholder="Age"/>
                </div>
                <div className="field" onChange={(e) => setTest(e.target.value)}>
                    
                    <input type="text"
                    value={test}
                    placeholder="Test 1 Score"/>
                </div>
                <button id="submit-button" type="submit" >submit</button>
        </form>
        </div>
    )
}

export default EditStudent;