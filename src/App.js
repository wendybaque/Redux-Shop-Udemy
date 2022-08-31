import {Provider} from 'react-redux';
import store from './redux/store';
import './style.css';
import PhoneComponent from './components/PhoneComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
          <PhoneComponent />
      </div>
    </Provider>
  );
}

export default App;
