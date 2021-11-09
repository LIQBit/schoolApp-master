import { ApolloClient, InMemoryCache } from "@apollo/client";
//import { ApolloClient, InMemoryCache } from '@apollo/react-hooks';

//Apollo client setup
export const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});
