import { useDispatch, useSelector } from 'react-redux';
import { types } from './actionTypes/actionTypes';
import './style/style.css';


function App() {
  const balance = useSelector((store) => store.cash)
  const daspath = useDispatch()
  return (
    <div className="App">
      <h1>{balance}</h1>
      <button onClick={() => daspath({ type: types.addCash })}>+</button>
      <button onClick={() => daspath({ type: types.getCash })}>-</button>
    </div>
  );
}

export default App;



/* 

//=============Routes,Route================

<Routes>
        <Route path="Имя" element={какой элемент}/>
</Routes> 


//================Link================
      <Link to="/Имя">имя элемента/Link>
*/