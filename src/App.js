import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import StudentDetails from './student-details';
import RemoveUser from './removeUser';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<StudentDetails />} />
          <Route exact path='/student-details/:edit' element={<RemoveUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
