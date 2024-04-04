import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Head/>
      <div className='flex'>
        <Sidebar/>
        <Body/>
      </div>
    </div>
  );
}

export default App;
