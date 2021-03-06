import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { editStudentMutation, getStudents } from "../queries/index";


const EditStudent = ( props ) => {
    //console.log("props", props)
    const [name, setName] = useState(); 
    const [age, setAge] = useState();
    const [test, setTest] = useState();
    const [editStudent] = useMutation(editStudentMutation);
    const thisStudent = {id: props.student.id, name: name, age: age, class: props.student.class, test1: test};

    const clickHandler = (e) => {
        e.preventDefault();
        editStudent({
            variables: {
                id: props.student.id,
                name: name,
                age: age,
                test1: test
            },
            refetchQueries: [{ query: getStudents}]
            });
            props.setStudent(thisStudent);
            props.handleClick(thisStudent);
            setName("");
            setAge("");
            setTest("");
    }

    
    return (
        <div id="edit-form">
            <h4>Edit Student</h4>
            <form id="edit-student" 
                onSubmit={clickHandler}>
                
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