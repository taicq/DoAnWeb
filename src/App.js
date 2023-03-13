import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../../Booking/src/pages/home/Home";
import List from "../../Booking/src/pages/list/List";
import Hotel from "../../Booking/src/pages/hotel/Hotel";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
