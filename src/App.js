import './App.css';
import Bar from './components/bar';
import Centerblock from './components/centerblock/menu';
import SideBar from './components/centerblock/sidebar'
import PlayBar from './components/centerblock/player-bar'
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <main className="main">
            <Bar />
            <Centerblock />
            <SideBar />
          </main>
          <PlayBar />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
