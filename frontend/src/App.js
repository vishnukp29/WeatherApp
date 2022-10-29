import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WeatherDetails/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
