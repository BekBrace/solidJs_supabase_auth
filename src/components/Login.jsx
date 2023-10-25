import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

import { useNavigate } from "@solidjs/router";
import { createClient } from "@supabase/supabase-js";

// createSupabase is deprecated, now it's createeClient

const Login = () => {
    const [email, setEmail] = createSignal(''); // email of the user
    const [password, setPassword] = createSignal(''); // password of the user
    const navigate = useNavigate();
     // createclient takes two parameters, Vie Supabase URL and Vite Supabase Key
    // Do not forget to go to Supabase website to create your own key
    const supabase = createClient("","");

// Function to login user
const loginUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email(),
        password: password(),
    })
    if (error) {
        alert(error.message);
        return;
    }
    if (data) {
        navigate("/dashboard");
    }
} 

    return (
        <div class="account-section">
            <form onSubmit={(e) => loginUser(e)}>
                <h3>Login</h3>
                <label>Email</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <span>
                    Don't have an account? <A href="/register">Register here</A>
                </span>
            </form>
        </div>
    )
}

export default Login;
