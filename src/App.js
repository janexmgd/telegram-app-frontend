import Router from './router';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// import redux persist
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
