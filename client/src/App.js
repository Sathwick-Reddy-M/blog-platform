import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/home.component";
import { Blog } from "./components/blog/blog.component";
import "./App.css";
import { Author } from "./components/author/author.component";
import { Navigation } from "./components/navigation/navigation.component";
import { SignIn } from "./components/sign-in/sign-in.component";
import { SignUp } from "./components/sign-up/sign-up.component";
import { Editor } from "./components/editor/editor.component";
import { useEffect, useState } from "react";
import { updateCurrentUser } from "../src/utils/firebase/firebase.utils";
import { Drafts } from "./components/drafts/drafts.component";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const intialUpdate = async () => {
      await updateCurrentUser(setUser);
    };
    intialUpdate();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation user={user} setUser={setUser}></Navigation>}
      >
        <Route index element={<Home></Home>}></Route>
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser}></SignIn>}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser}></SignUp>}
        ></Route>
        <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>
        <Route path="/author/:authorId" element={<Author></Author>}></Route>
        <Route path="/editor" element={<Editor></Editor>}></Route>
        <Route path="/drafts/:authorId" element={<Drafts></Drafts>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
