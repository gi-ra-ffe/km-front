import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MyPage from "./components/MyPage";
import Details from "./components/Details";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態を管理
  const [username, setUsername] = useState('ゲストさん'); // ログイン中のユーザー名

  // ログイン処理
  const handleLogin = (username) => {
    setIsLoggedIn(true); // ログイン状態を更新
    setUsername(username); // ユーザー名を記録
  };

  // ログアウト処理
  // const handleLogout = () => {
  //   setIsLoggedIn(false); // ログイン状態をリセット
  //   setUsername(''); // ユーザー名をリセット
  // };

  useEffect(() => {
    // http://localhost:8000/api/todoにアクセスし、todoのリストを取得
    // fetch("http://localhost:8000/api/todo")
    //   .then((response) => response.json())
    //   .then((data) => setTodos(data))
    //   .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <div className="">
          <Routes>
            {/* ログイン画面 */}
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            {/* アカウント作成画面 */}
            <Route path="/signup" element={<SignUpForm />} />
            {/* ホーム画面 */}
            <Route
              path="/home"
              element={
                // isLoggedIn ? (
                <MyPage username={username} />
                // <MyPage onLogout={handleLogout}  />
                //   <p>{username}でログイン</p>
                // ) : (
                // <Navigate to="/login" />
                // )
              }
            />
            {/* 詳細画面 */}
            <Route path="/details" element={<Details />} />
            {/* デフォルトはログイン画面へ */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        {/* todosの内容をリスト(<ul><li>)を使用して一覧表示 */}
        {/* <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul> */}
      </div>
    </Router>
  );
}

export default App;