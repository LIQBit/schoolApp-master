import React from "react";
import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import GoogleAuth from "./Components/GoogleAuth";


function App() {

    return (
          <div id="main">
            <h1>Student Tracker</h1>
            <GoogleAuth />
            <StudentList data-testid="studentListApp" />
            <AddStudent />
          </div>
        
    );
  
}

export default App;
