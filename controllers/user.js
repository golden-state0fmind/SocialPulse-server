const userModel = require('../models/user');
//getting all users
const index = async function (req, res) {
    const user = await userModel.find({});
    try {
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
};
//get a single user
const getOne = async (req, res) => {
    try {
        const user = await userModel.findById({ "_id": req.params.id }).populate("user_id");
        res.json(user)
    } catch (error) {
        res.status(500).send(error);
    };
};
//create a user
const create = async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    };
};
//update a single user
const update = async (req, res) => {
    try {
        const updates = req.body
        const user = await userModel.findByIdAndUpdate(req.params.id, updates)
        await user.save()
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    };
};
//delete a single user
const destroy = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        !user
            ? res.status(404).send('No user found!')
            : res.status(200).json({message: "User Deleted!"});
    } catch (error) {
        res.status(500).send(error);
    };
};
//export 
module.exports = {
    index,
    getOne,
    create,
    update,
    destroy
};