import Main from './main'
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'expo-dev-client';



export default function App() {

  return (
    <Provider store={store} >
      <Main />
    </Provider>
  )
}

