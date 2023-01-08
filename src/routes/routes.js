const { getAllUsers, createUser, updateUser, viewUser, deleteUser, signIn } = require("../controllers/userController");
const authentication = require('../middlewares/authentication');

const routes = (app) => {
    app.route('/signin').post(signIn)
    app.route('/users')
        .get(authentication,getAllUsers)
        .post(createUser);
    app.route('/user/:userId')
        .put(updateUser)
        .get(viewUser)
        .delete(deleteUser)
}

export default routes;