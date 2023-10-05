const express= require('express');
const { homepage,about,add,detail,edituser,updateuser,deleteuser,createnew } = require('../controllers/homeController');

const route = express.Router();

const initWebRoute = (app) => {
    route.get('/',homepage);
    route.get('/detail/user/:id',detail); 
    route.get('/add',add);
    route.post('/create-new-user',createnew);
    route.post('/delete-user',deleteuser);
    route.get('/edit-user/:id',edituser);
    route.post('/update-user',updateuser);
    return app.use('/',route);
}

module.exports= initWebRoute;