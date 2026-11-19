
import PropsExample from "./components/PropsExample";
import DefaultPropsExample from "./components/DefaultPropsExample";
import ThisExample from "./components/ThisExample";

function App() {
  return (
    <div className="container">
      <h1>React Programming Examples</h1>

      <p className="subtitle">
        Analysis of React Props, Default Properties
        and This Operator
      </p>

      <PropsExample />

      <DefaultPropsExample />

      <ThisExample />

      <footer>
        <p>React Assignment - 2026</p>
      </footer>
    </div>
  );
}

export default App;
