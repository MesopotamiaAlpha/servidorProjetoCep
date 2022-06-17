const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM cep", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});

// Rota para pegar dados do prinex
app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    db.query("SELECT * FROM cep WHERE id = ?", id,
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        });
});


// Route for creating the post
app.post('/api/create', (req, res) => {

    const usedestinatario = req.body.userDestinatario;
    const usertipo = req.body.userTipo;
    const usercte = req.body.userCte;
    const userdata = req.body.userData;

    console.log(usedestinatario, usertipo , usercte, userdata)

    db.query("INSERT INTO cep (cep) VALUES (?)", [usercep], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    }
    );
})

// Route to delete a post
app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM prinex WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})