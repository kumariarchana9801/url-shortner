
import './App.css';
import UrlShortener from './components/UrlForm';

function App() {
  return (
    <div className="App text-center d-flex justify-content-center ">
       <div>
        <h1>URL shortener service</h1>
      </div>
      <UrlShortener/>
      
    </div>
  );
}

export default App;
