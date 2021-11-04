import React, { useCallback, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getClassesQuery, addStudentMutation, getStudents, deleteStudentMutation, getStudentQuery } from "../queries/index";

const DeleteStudent = (props) => {
    
    const [deleteStudent] = useMutation(deleteStudentMutation);
    console.log(props)
    return (
        <div id="delete-function">
            <h6 id="delete-student" onClick={(e) => {
                e.preventDefault();
                deleteStudent({
                    variables: { id: props.id, key: props.id },
                    refetchQueries: [{ query: getStudents}, { query: getStudentQuery}],
                });
            }}>Delete Student</h6>
        </div>
    )

}

export default DeleteStudent;