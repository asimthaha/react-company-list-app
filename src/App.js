import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyListView from "./components/CompanyListView";
import CompanyListDelete from "./components/CompanyListDelete";
import CompanyListSeacrh from "./components/CompanyListSearch";
import CompanyListAdd from "./components/CompanyListAdd";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CompanyListAdd />} />
          <Route path="search" element={<CompanyListSeacrh />} />
          <Route path="delete" element={<CompanyListDelete />} />
          <Route path="view" element={<CompanyListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
