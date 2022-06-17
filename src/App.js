import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Pesquisar" />
      <div className="Resultados">
        <h2>Campo de resultados do banco de dados</h2>
        <p>Descrição</p>
        <div className='Tabela'>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
          <p className='texto'>Texto dentro da div <button className='excluir'>X</button></p>
        </div>
      </div>
    </div>
  );
}

export default App;
