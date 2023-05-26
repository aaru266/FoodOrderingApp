import Main from './main'
import { Provider } from 'react-redux'
import { store } from './app/store'
import 'expo-dev-client';


export const RES_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


export default function App() {

  return (
    <Provider store={store} >
      <Main />
    </Provider>
  )
}

