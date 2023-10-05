import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'; 


function PostItem(item) {
    const {
        _id,
        avg_score,
        messages,
        image,
        game_name
    } = item;

    return (

        
        <div className="container">
           <div className="row">

            <div className="col-md-6">
                <section className="game bg-light p-3">
                    <div className="game-poster">
                <img className="img-fluid"
                    alt={game_name}
                    src={`/images/${image}`}
                />
                </div>
                <div className="game-info">
                <h2>{game_name}</h2>
                <p>{messages}</p>
                <a>Score: {avg_score}</a>
                <div className="submit-review">
           <Link to={`/post/${_id}`}> Leave a Review </Link> 
           </div>
           </div>
           
           </section>
            </div>
          
           </div>
          
        </div>
    );
}

export default PostItem;