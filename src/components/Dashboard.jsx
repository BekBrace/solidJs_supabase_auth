// importing createsignal and createsignal functions
import { createEffect, createSignal } from "solid-js";
// usenavigate for routing
import { useNavigate } from "@solidjs/router";
// createclient is used to create a supabase client
import { createClient } from "@supabase/supabase-js";

const Dashboard = () => {
    const [user, setUser] = createSignal({}); // user details
    const navigate = useNavigate();
    const supabase = createClient("https://jsqoravefyofyjxbmrij.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzcW9yYXZlZnlvZnlqeGJtcmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NjAzMzcsImV4cCI6MjAxMzEzNjMzN30.XtlCFoTqFB0AeFTHtLVjQL-3-riy_mCEEepAfnGUBQI");
    
    createEffect(() => {
        getLoggedUser();
    })

    const getLoggedUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user)
        if(!user) {
            navigate("/login", { replace: true });
        }
    }
    
    const logOut = async () => {
        let { error } = await supabase.auth.signOut();

        if (error) {
            alert(error.message);
            return
        }
        setUser({})
        navigate("/login", { replace: true });
    }

    return (
       <div class="dashboard-section">
            <div class="user-detail">
                <h3>Dashboard</h3>
                <h4>Welcome, {user() && user().email}</h4>
                <button type="button" class="logout" onclick={logOut}>Log out</button>
            </div>
        </div>
    )
}

export default Dashboard
