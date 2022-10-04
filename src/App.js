import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  const show = (value) => {
    alert(`Ваше значение: ${value}`);
  }
  return (
    <div className="App">
       <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/classComponet" className="link">ClassComponent</Link>
      </nav>
      <Routes>
        <Route
          path="/classComponet"
          element={
            <ClassComponent show={show} name="BMW" model="X5" year="2019" />
          }
        />
        <Route path="/classComponet/functionComponent" element={
          <FunctionComponent show={show} name="Lexus" model="IS 250" year="2011"/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
