import {Provider} from 'react-redux';
import store from './redux/store';
import './style.css';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';
import TabletContainer from './components/TabletContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
          <PhoneContainer />
          <TvContainer />
          <TabletContainer />
      </div>
    </Provider>
  );
}

export default App;
