import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import DashboardComponent   from "./components/Dashboard"

const Profile = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div style={{ margin: "10px" }}>

                {/* Topbar  */}
                <div className="top-bar">
                    <div className="aa">
                        <img src={user.picture} alt={user.name} />
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>

                    <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
                </div>

                <DashboardComponent />
            </div>

        )
    );
};

export default Profile;