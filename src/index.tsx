import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
