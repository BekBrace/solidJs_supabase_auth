import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

import { useNavigate } from "@solidjs/router";
import { createClient } from "@supabase/supabase-js";


const Register = () => {
    const [email, setEmail] = createSignal(''); // email of the user
    const [password, setPassword] = createSignal(''); // password of the user
    const supabase = createClient("https://jsqoravefyofyjxbmrij.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcW9yYXZlZnlvZnlqeGJtcmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NjAzMzcsImV4cCI6MjAxMzEzNjMzN30.XtlCFoTqFB0AeFTHtLVjQL-3-riy_mCEEepAfnGUBQI");
    const navigate = useNavigate();

    // Register user function
    const registerUser = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: email(),
            password: password(),
        })
        if (error) {
            alert(error.message);
            return;
        }
        if (data) {
            navigate("/");
        }
    }

    return (
        <div class="register-section">
            <form onsubmit={(e) => registerUser(e)}>
                <h3>Register</h3>
                <label>Email</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
                <span>
                    Already have an account? <A href="/login">Login here</A>
                </span>
            </form>
        </div>
    )
}
export default Register;