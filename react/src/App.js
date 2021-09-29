import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './component/Jugadores';
import EquipoSeleccionado from './component/EquipoSeleccionado';
import "./Styles/styles.scss"

const App = () => (
  <Provider store={store}>
    <main>
      <h1>EDmanager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
