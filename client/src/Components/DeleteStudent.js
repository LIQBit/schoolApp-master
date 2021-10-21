import React, { useCallback, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getClassesQuery, addStudentMutation, getStudents, deleteStudentMutation, getStudentQuery } from "../queries/index";

const DeleteStudent = (selectedStudent) => {
    
    const [deleteStudent] = useMutation(deleteStudentMutation);
    //console.log(selectedStudent.student.student.id)
    return (
        <div id="delete-function">
            <h6 id="delete-student" onClick={(e) => {
                e.preventDefault();
                deleteStudent({
                    variables: { id: selectedStudent.student.student.id },
                    refetchQueries: [{ query: getStudents}],
                });
            }}>Delete Student</h6>
        </div>
    )

}

export default DeleteStudent;