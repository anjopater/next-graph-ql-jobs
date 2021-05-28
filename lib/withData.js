import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "next-with-apollo";
import { endpoint } from "../config";

function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(createClient, { getDataFromTree });
