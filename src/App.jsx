import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer';
import FromularioColores from './components/FromularioColores';
import { Container } from 'react-bootstrap';

function App() {
  
  return (
    <>
    <Container className='my-5 mainpage'>
    <h1 className='text-center display-2'>List the color</h1>
     <FromularioColores></FromularioColores>
     </Container>
     
    <Footer>
    </Footer>
    </>
  )
}

export default App
