import './App.css';
import Axios from 'axios';
import { ListItem } from '@mui/material';
import React, { useState, useEffect } from "react";
import { ListItemButton, Button, Paper,} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

function App() {
  const url = "http://172.25.105.110:3002/api";


  const [postList, setPostList] = useState([]);
  const [cep, setCep] = useState("");

  useEffect((cep) => {
    Axios.get(url + "/get").then((cep) => {
        setPostList(cep.data);
        console.log(cep.data);
        console.log("dentro do useEffect");
    });
}, []);


  function deletPost(id) {
    Axios.delete(url + `/delete/${id}`).then((response) => {
        console.log("you deleted a post");
    });
}

function deletRegistro() {
  window.alert("Registro deletado com sucesso!");
}
const submitPost = () => {
  Axios.post(url + '/create', { cep: cep}).then(res => {
      console.log(res);
      
  }, err => {
      console.log(err);
      window.alert("Erro ao consultar o banco de dados, informe ao Adm!");
  }
  );
  window.alert("Cadastro realizado com sucesso!");
};



  return (
    <div className="App">
      <div className="blocoCadastro">
        <h1>Campo de cadastro</h1>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }}
      noValidate autoComplete="off" onChange={(e) => { setCep(e.target.value) }} >
      <TextField id="filled-basic" label="Escreva para cadastrar" inputProps={{ maxLength: 8 }} variant="filled" />
      </Box>
      <Button  variante="contained"  onClick={submitPost}>Cadastrar</Button>
      </div>
      <div className="Resultados">
        <div className='Tabela'>
          <h1 className="titulo">Resultados das pesquisas</h1>
          <ul className="listaUl">
            {postList.map(cep =>
              <ListItem style={{ backgroundColor: "#A993F9" }} component="a" className="textoLista" key={cep.id}><Divider >
                {"Id do registro: " + cep.id + "   / Cep pesquisado: " + cep.cep}
                <Button variant="contained" className='excluir' onClick={(() => deletPost(cep.id))} >X</Button>
                </Divider></ListItem>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
