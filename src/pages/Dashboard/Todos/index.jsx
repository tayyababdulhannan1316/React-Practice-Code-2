
import { Routes , Route } from "react-router-dom";
import All from "./All";
import Add from "./add";

const Todos = () => {
  

  return (
    <Routes>
      
      <Route path="/" element={<All />} />
      {/* <Route path="all" element={<All />} /> */}
      <Route path="add" element={<Add />} />
      
      
    </Routes>
  
  );
};

export default Todos;
