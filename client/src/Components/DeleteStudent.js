import React, { useCallback, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getClassesQuery, addStudentMutation, getStudents, deleteStudentMutation, getStudentQuery } from "../queries/index";

const DeleteStudent = (selectedStudent) => {
    
    const [deleteStudent] = useMutation(deleteStudentMutation);
    //console.log(selectedStudent.student.student.id)
    return (
        <div>
            <button onClick={(e) => {
                e.preventDefault();
                deleteStudent({
                    variables: { id: selectedStudent.student.student.id },
                    refetchQueries: [{ query: getStudents}],
                });
            }}>Delete Student</button>
        </div>
    )

}

export default DeleteStudent;