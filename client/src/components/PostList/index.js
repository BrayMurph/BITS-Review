import React, { useEffect } from "react";
import PostItem from "../PostItem";
import { usePostContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { QUERY_POST } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { LOAD_POST } from "../../utils/actions";


function PostList() {

    const [state, dispatch] = usePostContext();

    const { currentPost } = state;

    const { loading, data } = useQuery(QUERY_POST);

    useEffect(() => {
        if (data) {
            dispatch({
                type: LOAD_POST,
                posts: data.posts,
            });
            data.posts.forEach((post) => {
                idbPromise('posts', 'put', post);
            });
        } else if (!loading) {
            idbPromise('posts', 'get').then((posts) => {
                dispatch({
                    type: LOAD_POST,
                    posts: posts,
                });
            });
        }
    }, [data, loading, dispatch]);
    
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