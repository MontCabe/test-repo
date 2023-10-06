
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';

const App = () => {
  return (
    <div id="App">
      <h1>Hello Montyyy</h1>
      <h1>Do you want to learn React.js?</h1>
      <ClassComp/>
      <ClassComp1/>
      <FunctionalComp/>
    </div>
  );
}

export default App;
