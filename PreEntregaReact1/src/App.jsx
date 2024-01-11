import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Header/>
      <NavBar />
      <ItemListContainer mensaje={"Pagina en mantenimiento, vuelva pronto"} />
    </div>
  )
}

export default App;
