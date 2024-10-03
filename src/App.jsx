import { Routes, Route} from 'react-router-dom';
import Orders from './pages/Orders.jsx';

function App() {
   return (
    <>
      <Routes>
        <Route path="/" element={<Orders/> } />      
      </Routes>
    </>
  )
}

export default App
