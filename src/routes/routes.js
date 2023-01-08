const { getAllUsers, createUser, updateUser, viewUser, deleteUser, signIn, signUp } = require("../controllers/userController");
const authentication = require('../middlewares/authentication');

const routes = (app) => {
    app.route('/signin')
        .post(signIn);
    app.route('/signup')
        .post(signUp);
    app.route('/users')
        .get(authentication,getAllUsers)
        .post(authentication,createUser);
    app.route('/user/:userId')
        .put(authentication,updateUser)
        .get(authentication,viewUser)
        .delete(authentication,deleteUser)
}

export default routes;