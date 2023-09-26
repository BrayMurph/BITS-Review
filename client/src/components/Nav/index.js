import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from './config/apollo'; // Your Apollo Client setup
import './index.css'; // Your global CSS file
import App from './components/App'; // Your main App component

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
});

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </ApolloProvider>,
  rootElement
);
