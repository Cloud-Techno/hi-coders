import React from 'react';
import FishFarm from './component/data';
import Main from './component/main';

function App() {
  return (
    <div className="App">
      <Main data={FishFarm} />
    </div>
  );
}

export default App;