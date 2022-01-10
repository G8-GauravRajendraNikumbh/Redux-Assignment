import Home from "./pages/HomePage";
import Entry from "./pages/EntryPage";
import List from "./pages/ListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PermanentDrawerRight from "./Layout";

const Routers = () => {
  return (
    <BrowserRouter>
       <PermanentDrawerRight>
         
      <Routes>
         <Route path={"/"} element={<Home />} />
        <Route path={"/entry"} element={<Entry />} />
        <Route path={"/list"} element={<List />} />
      </Routes>
         </PermanentDrawerRight>

       
    </BrowserRouter>
  );
};

export default Routers