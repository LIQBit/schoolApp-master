import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import { getStudents } from "./queries";
import AllClasses from "./Components/OneFE2List";
import NavBar from "./Components/NavBar";
import { Route, BrowserRouter } from "react-router-dom";
import OneFE1List from "./Components/OneFE1List";
import OneFE2List from "./Components/OneFE2List";
import TwoFEList from "./Components/TwoFEList";
import ThreeFEList from "./Components/ThreeFEList";
import StudentDetails from "./Components/StudentDetails";
import EditStudent from "./Components/EditStudent";


function App() {

    return (
    
      <BrowserRouter >
        <div id="main">
          <h1>Student Tracker</h1>
          <StudentList />
          <Route path='/AllStudents' component={StudentList} />
          {/*<Route path='/1FE1' component={OneFE1List} />
          <Route path='/1FE2' component={OneFE2List } />
          <Route path='/2FE' component={TwoFEList} />
          <Route path='/3FE' component={ThreeFEList} />*/}
          <AddStudent />
        </div>
      
    </BrowserRouter>
        
    );
  


}

export default App;
