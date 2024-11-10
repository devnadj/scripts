const notificationsController = {
    notifications: (req, res) => {
        res.render('notifications', {
            title: 'Notifications',
            session: req.session,
        }
        );
    }
}

export default notificationsController;