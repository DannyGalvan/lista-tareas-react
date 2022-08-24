import React from "react";
import MainUI from "./MainUI";
import { TodoProvider } from "../Context/Index";

function App() {

  return (
   <TodoProvider>
       <MainUI/>
   </TodoProvider>
  );
}

export default App;
