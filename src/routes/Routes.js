const express = require('express');
const RouterUser = require('./user/User');
const router = express.Router();
let userInstance = new RouterUser();

router.route('/practicafuncion')
    .post(
        function(req,res){
            userInstance.practicafuncion(req,res);
        }
    );

module.exports = router;