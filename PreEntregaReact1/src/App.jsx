import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <NavBar />
      <ItemListContainer/>
      <Routes>
        <Route path= {"/"} element={<ItemListContainer />} />
        <Route path= {"/category/:id"} element={<ItemListContainer />} />
        <Route path= {"/item/:id"} element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
