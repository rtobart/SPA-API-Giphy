import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import {Route, Link} from 'wouter'

function App() {
  return (
    <div className="App">
      <secciton className="App-content">
        <h2>App Giphy</h2>
        <div>
          <input type="text" />
          <button className="buscardor">🔍</button>
        </div>
        <Link to="/gif/panda">panda</Link>
        <Link to="/gif/cat">cat</Link>
        <Link to="/gif/dog">dog</Link>
        <Route 
          path="/gif/:keyword" 
          component={ListOfGifs}
        />
      </secciton>
    </div>
  );
}

export default App;
