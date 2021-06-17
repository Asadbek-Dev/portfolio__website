import { Route, Switch } from 'react-router';
import './App.scss'
import About from './components/About';
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Navbar/>
      </div>
      <div className='main-content'>
        <div className="content">
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/about' exact>
              <About/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
