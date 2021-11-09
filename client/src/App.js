import React from "react";
import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import { ApolloProvider } from "@apollo/client";
import { Route, BrowserRouter } from "react-router-dom";


function App() {

    return (
          <div id="main">
            <h1>Student Tracker</h1>
            <StudentList data-testid="studentListApp" />
            <AddStudent />
          </div>
        
    );
  
}

export default App;
