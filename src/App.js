import './App.css';
import  Header  from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Configuration from './configuration/Configuration';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Configuration/>
      <Footer/>
    </>
  );
}

export default App;
