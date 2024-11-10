const messagesController = {
    messages: (req, res) => {
        res.render('messages', {
            title: 'Messages',
            session: req.session,
        }
        );
    }
};

export default messagesController;