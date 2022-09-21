import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
function App() {
  return (
    <div className="App">
      <ClassComponent name="BMW" model="X5" year="2019"/>
      <FunctionComponent name="Lexus" model="IS 250" year="2011"/>
    </div>
  );
}

export default App;
