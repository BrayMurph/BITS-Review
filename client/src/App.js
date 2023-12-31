import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import GamePost from './pages/GamePost';
import Login from './pages/login';
import Signup from "./pages/signup";
import Profile from './pages/profilepage';
import Nav from "./components/Nav";
import { PostProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <PostProvider>
                    <Nav />
                    <Routes>
                        <Route 
                            path="/"
                            element={<Home />}
                        />
                        <Route 
                            path="/login"
                            element={<Login />}
                        />
                        <Route 
                            path="/signup"
                            element={<Signup />}
                        />
                        <Route 
                            path="/profile"
                            element={<Profile />}
                        />
                        <Route 
                            path="/post/:id"
                            element={<GamePost />}
                        />
                    </Routes>
                    </PostProvider>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;