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

        
        <div class="container">
           <div class="row">

            <div class="col-md-6">
                <section class="game bg-light p-3">
                    <div class="game-poster">
                <img class="img-fluid"
                    alt={game_name}
                    src={`/images/${image}`}
                />
                </div>
                <div class="game-info">
                <h2>{game_name}</h2>
                <p>{messages}</p>
                <a>Score: {avg_score}</a>
                <div class="submit-review">
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