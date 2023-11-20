import Header from './components/Header'
import './App.scss';
import RecipeList from './components/RecipeList'
import Tabs from './components/Tabs'
import { useState } from 'react';

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="main">
      <Header/>
      <Tabs setLoader={setLoader}/>
      <RecipeList setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
      </div>}
    </div>
  );
}

export default App;
