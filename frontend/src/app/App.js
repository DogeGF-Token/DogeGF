import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import history from '@history';
import theme from './theme';
import store from './store';

import HomeApp from './main/HomeApp';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router history={history}>
          <HomeApp />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
