import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link }  from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <Router>
   <div className="main">
        <h2 className="main-header">User Dashboard</h2>
        <Link to='/create'>

            <Button>Create User</Button>

          </Link><br></br>
         
          <Link to='/read'>

          <Button>View Users</Button>

        </Link> 
         <Routes>
          <Route exact path='/create' element={<Create/>} />
       
        
          <Route exact path='/read' element={<Read/>} />
      

        <Route path='/update' element={<Update/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
