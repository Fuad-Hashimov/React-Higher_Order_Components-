import "./App.css";
import Counter from "./Components/Counter";
import HowerCounter from "./Components/HowerCounter";

function App() {
  return (
    <div className="App">
      <Counter hello="Hello Counter"/>
      <br/>
      <HowerCounter/>
    </div>
  );
}

export default App;
