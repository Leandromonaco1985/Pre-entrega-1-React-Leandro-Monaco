
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
 
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section className="color-changing-text">
      <ItemListContainer greetings = " Welcome to be best place to spend all your biyuya !"/>
      </section>
    </>  
  
     

   
  )
}


export default App
