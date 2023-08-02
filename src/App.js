import './App.css';
import { Footer, Header } from './component';
import Allroute from './route/Allroute';

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroute/>
      <Footer/>
    </div>
  );
}

export default App;
