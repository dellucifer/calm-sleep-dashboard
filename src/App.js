import "./App.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="app__navbar">
        <Navbar />
      </div>
      <div className="app__dashboard">
        <Dashboard
          image={"https://uploads-ssl.webflow.com/60f31ffb47d0ac4b28d56fb6/620d1571c1155b69b54cb0de_10_minutes_deep_relaxation.jpg"}
          unique_plays={6000}
          total_plays={8000}
          completion_rate={80}
        />
      </div>
    </div>
  );
}

export default App;
