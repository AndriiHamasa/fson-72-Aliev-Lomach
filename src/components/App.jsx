import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/Newspage";
import TodoPage from "./pages/Todo/TodoPage";
import Layout from "./Layout/Layout";
import TotoDetailsPage from "./pages/Todo/TodoDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:todoid" element={<TotoDetailsPage />} />
        <Route path="*" element={ <h1>Error 404</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
