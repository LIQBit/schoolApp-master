import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getClassesQuery, addStudentMutation, getStudents } from "../queries/index";
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";

const AddStudent = () => {
  const { data, loading, error } = useQuery(getClassesQuery);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [classId, setClassId] = useState("");
  const [test, setTest] = useState("");
  const [addStudent] = useMutation(addStudentMutation);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({
      variables: {
        name,
        age,
        classId: classId,
        test1: test,
      },
      refetchQueries: [{ query: getStudents}]
    });
    setName("");
    setAge("");
    setTest("");
    setClassId("");
    
  };

    


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  

  return (
    <form
      id="add-student"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label>Student Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Test1:</label>
        <input
          type="text"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Class:</label>
        <select value={classId} onChange={(e) => setClassId(e.target.value)}>
          <option>Select Class</option>
          {data.classes.map((clas) => (
            <option key={clas.id} value={clas.id}>
              {clas.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddStudent;
