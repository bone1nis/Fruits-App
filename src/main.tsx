import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from "./store/index"
import App from './components/app/App'

import "./assets/style/style.scss"

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
