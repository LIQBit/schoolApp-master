import React from "react";
import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import { Route, BrowserRouter } from "react-router-dom";


function App() {

    return (
    
      <BrowserRouter >
        <div id="main">
          <h1>Student Tracker</h1>
          <StudentList />
          <Route path='/AllStudents' component={StudentList} />
          <AddStudent />
        </div>
      
    </BrowserRouter>
        
    );
  
}

export default App;
