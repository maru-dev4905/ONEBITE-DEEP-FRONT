import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/index-page";
import CounterPage from "./pages/counter-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import TodoListPage from "./pages/todo-list-page";
import AuthLayout from "./components/auth-layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
