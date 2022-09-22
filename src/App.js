import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
function App() {
  const show = (value) => {
    alert(`Ваше значение: ${value}`);
  }
  return (
    <div className="App">
      <ClassComponent show={show} name="BMW" model="X5" year="2019"/>
      <FunctionComponent show={show} name="Lexus" model="IS 250" year="2011"/>
    </div>
  );
}

export default App;
