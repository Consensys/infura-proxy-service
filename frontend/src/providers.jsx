/* --- Global --- */
import React from "react";
import { ApolloProvider } from "react-apollo";
/* --- Local --- */

import { client } from "./settings/apollo";

/* --- Component --- */
export default (props) => {
  return (
    <ApolloProvider client={client}>
      <div>{props.children}</div>
    </ApolloProvider>
  );
};
