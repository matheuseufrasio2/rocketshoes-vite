import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { store } from './store';

import GlobalStyles from './styles/global';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}
