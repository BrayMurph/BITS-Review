import React from "react";
import { Link } from "react-router-dom";

function PostItem(item) {
    const {
        _id,
        avg_score,
        messages,
        image,
        game_name
    } = item;

    return (
        <div className="card px-1 py-1">
            <Link to={`/post/${_id}`}>
                <img 
                    alt={game_name}
                    src={`/images/${image}`}
                />
                <p>{game_name}</p>
                <p>{messages}</p>
                <a>{avg_score}</a>
            </Link>
        </div>
    );
}

export default PostItem;