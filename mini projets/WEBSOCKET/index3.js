import express from 'express';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'node:path';



const app = express();
const PORT = 3005;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public/'));

// Créer un serveur HTTP à partir de l'application Express
const server = app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port http://localhost:${PORT}`);
});

// Attacher Socket.IO au serveur HTTP
const io = new Server(server);

// Définir une route pour servir une page HTML avec un client Socket.IO
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '/public/index.html'));
});

// Définir une route pour servir une page HTML avec un client Socket.IO
app.get('/msg', (req, res) => {
    res.sendFile(join(__dirname, '/public/msg.html'));
});

// Gérer les connexions Socket.IO
io.on('connection', (socket) => {
  console.log('Nouvelle connexion socket établie');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});
