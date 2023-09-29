import React from "react";
import PostItem from "../PostItem";
import { usePostContext } from "../../utils/GlobalState";

function PostList() {

    const [state] = usePostContext();

    const { currentPost } = state;
    
    function filterPosts() {
        if(!currentPost) {
            return state.posts;
        }

        return state.posts.filter(
            (post) => post._id === currentPost
        );
    }

    return (
        <div className="my-2">
            {state.posts.length ? (
               <div className="flex-row">
                {filterPosts().map((post) => (
                    <PostItem 
                        key={post._id}
                        id={post._id}
                        image={post.image}
                        game_name={post.game_name}
                        avg_score={post.avg_score}
                        messages={post.messages}
                    />
                ))}
               </div> 
            ) : (
                <h3>There are no posts here</h3>
            )}
        </div>
    );
}

export default PostList;