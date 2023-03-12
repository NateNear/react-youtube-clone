import React from "react";

import {AppContext} from './context/contextApi'

function App() {
  return (
    <AppContext>
      <div className="App">
        <h1 className="text-8xl">Hello World!</h1>
      </div>
    </AppContext>

  );
}

export default App;
