import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './page/PageNotFound/PageNotFound';
import MemberShip from './page/MemberShip/MemberShip';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/team/:id" element={<PageNotFound />} />
        <Route path="*" exact="true" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
