import {auth} from "../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
export const Auth = () => {
    const [email, setEmail] = useState ("");
    const [password, setPass] = useState("");
    const signIn = () =>{};
    return (
        <div>
            <input placeholder="Email..."/>
            <input placeholder="Placeholder..."/>
            <button>Sign in</button>
        </div>
    )
};