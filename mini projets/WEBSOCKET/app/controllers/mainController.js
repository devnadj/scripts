
const mainController = {
    home: (req, res) => {
        res.sendFile('index.html');
    }
};

export default mainController;