const express = require('express');
const serviceRouter = express.Router();
const moment = require('moment');

const User = require('../models/User');
//http://localhost:3000/service/5654

//get Specific Data
serviceRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const data = await User.findOne({
        id
    });

    res.json(data);

})

serviceRouter.post('/add-employee', async (req, res) => {

    const { name, id, role, doj, salary } = req.body;
    const user = new User({
        name,
        id,
        role,
        doj: moment(doj, "DD-MM-YYYY").toDate(),
        salary
    })

    const resData = await user.save();
    res.json(resData)

});


//Delete Employee

serviceRouter.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const data = await User.remove({
        id
    });

    res.json(data);

})


module.exports = serviceRouter;