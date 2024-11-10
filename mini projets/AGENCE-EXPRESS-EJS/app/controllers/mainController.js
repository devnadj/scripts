const mainController = {
    home: (req, res) => {
        res.render('home', { title: 'Accueil'});
    }
}

export default mainController;