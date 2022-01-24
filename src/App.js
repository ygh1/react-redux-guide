
import Count from './components/Count'
import { Provider } from 'react-redux'
import store from './store'
console.log(store.getState())

function App() {
  return (
   <Provider store={store}>
     <Count />
   </Provider>
  );
}

export default App;
