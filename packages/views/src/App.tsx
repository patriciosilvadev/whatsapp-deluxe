import React from 'react';
import { Client } from '@react-fullstack/fullstack-socket-client'
import * as Components from "./components";
import { ViewsToComponents } from '@react-fullstack/fullstack';


function App() {
  return (
    <div>
      <Client host={"localhost"} port={5000} views={Components} /> 
    </div>
  );
}

export default App;
