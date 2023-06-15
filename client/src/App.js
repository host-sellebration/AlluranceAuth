import Auth from "./pages/Auth";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checking from "./pages/Checking";
import NotChecked from "./pages/NotChecked";
import Genuine from "./pages/Genuine";
function App() {
  return (
    <Router>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/check" element={<Checking/>}/>
          <Route path="/notchecked" element={<NotChecked/>}/>
          <Route path="/genuine" element={<Genuine/>}/>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
