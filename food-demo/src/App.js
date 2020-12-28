import Home from 'pages/Home/Home';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faShoppingCart)

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App;
