/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {ApolloProvider} from 'react-apollo';
import {SearchProvider} from '@context/search';
/* --- Local --- */
import theme from './assets/theme';

import {client} from './settings/apollo';

/* --- Component --- */
export default props => {
  return (
    <ApolloProvider client={client}>
      <Atom.Box>
        <ThemeProvider theme={theme}>
          <SearchProvider>{props.children}</SearchProvider>
        </ThemeProvider>
      </Atom.Box>
    </ApolloProvider>
  );
};
