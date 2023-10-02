import React, { createContext, useContext } from 'react';
import { usePostReducer } from './reducers';

const PostContext = createContext();
const { Provider } = PostContext;

const PostProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = usePostReducer({
    posts: [],
    comments: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const usePostContext = () => useContext(PostContext);

export { PostProvider, usePostContext };
