import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function Profile() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>
            <div className="container my-1">
                <Link to="/">← Back to Home</Link>

                {user ? (
                    <>
                        <h2>
                            Welcome Back {user.username}!
                        </h2>
                        {user.comment.map((comments) => (
                            <div key={comments._id} className="my-2">
                                <div className="flex-row">
                                    <a>{comments.message}</a>
                                    <a>{comments.score}</a>
                                </div>
                            </div>
                        ))}
                    </>
                ) : null} 
            </div>
        </>
    );
}

export default Profile;