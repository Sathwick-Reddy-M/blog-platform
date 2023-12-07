import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home.component";
import { Blog } from "./components/blog/blog.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home></Home>}></Route>
      <Route path="/blog/:id" element={<Blog></Blog>}></Route>
    </Routes>
  );
}

export default App;
