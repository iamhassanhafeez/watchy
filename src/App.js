import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

//====== Import Components
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Shop />
      </div>
    </Provider>
  );
}

export default App;
