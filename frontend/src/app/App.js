import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import history from '@history';
import theme from './theme';
import store from './store';

import MainApp from './main/MainApp';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Router history={history}>
            <MainApp />
          </Router>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
