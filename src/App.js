import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './config/AppRouter'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
