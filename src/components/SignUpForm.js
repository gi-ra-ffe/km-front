
import Button from "./Button";
import CustomLink from "./CustomLink";
import { CustomForm, InputText } from "./FormParts";

const SignUpForm = () => {
    return (<>
        <CustomForm >
            <small>ユーザー名</small>
            <InputText
                placeholder="山田花子"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            />
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

            <Button>新規登録する</Button>
            <p className="text-center"><CustomLink to="/login">ログインする</CustomLink></p>
        </CustomForm>
    </>)
}
export default SignUpForm;