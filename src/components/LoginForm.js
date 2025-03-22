// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import apiClient from '../api/client';
import Button from "./Button";
import CustomLink from "./CustomLink";
import { CustomForm, InputText } from "./FormParts";

const LoginCustomForm = ({ onLogin }) => {
    // const [username, setUsername] = useState(''); // ユーザー名入力
    // const [password, setPassword] = useState(''); // パスワード入力
    // const [error, setError] = useState(''); // エラーメッセージ
    // const navigate = useNavigate(); // ページ遷移用

    // const handleLogin = async (e) => {
    //     // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await apiClient.post('/auth/login', { username, password }); // ログインリクエスト
    //         const { token } = response.data; // トークンを取得
    //         localStorage.setItem('token', token); // トークンをローカルストレージに保存
    //         onLogin(username); // 親コンポーネントにログインイベントを伝達
    //         navigate('/home'); // ホーム画面に遷移
    //     } catch {
    //         setError('ログインに失敗しました。ユーザー名またはパスワードを確認してください。');
    //     }
    // };

    // const handleNavigateToSignUp = () => {
    //     navigate('/signup'); // アカウント作成画面に遷移
    // };
    return (<>
        <CustomForm onSubmit="">
            <small>メールアドレス</small>
            <InputText
                placeholder="user@sample.com"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            />
            <small>パスワード</small>
            <InputText
                placeholder="password123"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            />
            <Button>ログインする</Button>
            <p className="text-center"><CustomLink to="/signup">新規登録する</CustomLink></p>
        </CustomForm>
    </>)
}
export default LoginCustomForm;