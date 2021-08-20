import './App.css';
import styled from 'styled-components';
import Input from './components/Input';

function App() {

  const Calculator=styled.div`
  max-width:1170px;
  background-color:white;
  display:block;
  margin:0 auto;
  padding:20px;
  `


  return (
    <div className="App">
      <Calculator>
        <Input/>
      </Calculator>
     
    </div>
  );
}

export default App;
