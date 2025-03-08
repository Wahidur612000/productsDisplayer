import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import MultiSelect from "./components/MultiSelect";
import ApiCall from "./components/ApiCall";
import Counter from "./components/Counter";
import ProductsDisplayer from "./components/ProductsDisplyer";
import ThemeProvider from "./components/context/ThemeProvider";
import ThemeComponent from "./components/ThemeComponent";

function App() {
  return(
    // <TodoList />
    // <ProductsDisplayer />
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>

  );
}

export default App;
