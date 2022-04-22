import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App  w-1/2 h-1/2 m-auto text-center">
      <h1 className="text-white p-4 mb-2 font-bold text-lg bg-green-500 w-full">
        Din Profile
      </h1>
      <div className="bg-green-400 broder-2 p-3 mb-4 w-2 h-2 top-0"></div>
      <Form />
    </div>
  );
}

export default App;
