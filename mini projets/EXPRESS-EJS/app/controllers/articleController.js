const articleController = {
    article: (req, res) => {
        res.send(`Article n°${req.params.id}`);
    }
};

export default articleController;