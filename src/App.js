import './App.css';
import Axios from 'axios';
import { ListItem } from '@mui/material';
import React, { useState, useEffect } from "react";


function App() {
  const url = "http://172.25.106.222:3002/api";


    const [postList, setPostList] = useState([]);

    useEffect((data) => {
        Axios.get(url + "/get").then((data) => {
            setPostList(data.data);
            console.log(data.data);
        });
    }, []);


  return (
    <div className="App">
      <input type="text" placeholder="Cadastrar no banco" />
      <div className="Resultados">
        <h2>Campo de resultados do banco de dados</h2>
        <p>Descrição</p>
        <div className='Tabela'>

        <div className="resultado">
        <h1 className="titulo">Prinex recebidos</h1>
        <ul className="listaUl">

            {postList.map(cep =>
                <ListItem style={{ backgroundColor: "#594b8f" }} component="a" className="textoLista" key={cep.id}>
                    {"Id do registro: " + cep.id + "   / Cep pesquisado: " + cep.cep}
                    <button className='excluir'>X</button>
                </ListItem>)}
        </ul>
    </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
