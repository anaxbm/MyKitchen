import Nav from './components/Nav/Nav';
import './App.scss';
import MexicanCuisine from './components/Mexican/MexicanCuisine'
import KoreanCuisine from './components/Korean/KoreanCuisine'
import ThaiCuisine from './components/Thai/ThaiCuisine'
import ItalianCuisine from './components/Italian/ItalianCuisine'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <main className='main-section'>
        <Routes>
          <Route path='/Mexican' element= {<MexicanCuisine/>}/>
          <Route path='/Korean' element= {<KoreanCuisine/>}/>
          <Route path= '/Thai' element= {<ThaiCuisine/>}/>
          <Route path= '/Italian' element= {<ItalianCuisine/>}/>
        </Routes>
           

           </main>

      
    </div>
    </Router>
    
  );
}

export default App;
