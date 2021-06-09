import './App.scss'
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
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
