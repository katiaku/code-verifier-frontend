import React from 'react';
import './App.css';

// React Router DOM Imports
import { AppRoutes } from './routes/Routes';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
