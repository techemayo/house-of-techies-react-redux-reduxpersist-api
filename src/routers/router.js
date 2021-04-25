const express = require("express");
const router = new express.Router();
const userSchema = require("../models/user")





// =======================================================================================
//////////////// route Login Data //////////////
router.post("/api/signup", async (req, res) => {
    try {
        const addingUserRecord = new userSchema(req.body)
        console.log(req.body);
        const inserUser = await addingUserRecord.save();
        res.status(201).send(inserUser);
        addingUserRecord.save();
    } catch (e) {
        res.status(400).send(e);
    }
    res.send("Successfull")
})
router.post('/api/login', async (req, res) => {
    // Read username and password from request body
    var { username, password } = req.body;
    // console.log(username)
    // console.log(password)
    let getUser
    try {

        getUser = await userSchema.find({});
        // const getUser = await userSchema.find({});
        // a = getUser
    } catch (e) {
        res.status(400).send(e);
    }
    // console.log(getUser);
    // console.log(a);
    // Filter user from the users array by username and password
    const user = getUser.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        // const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
            // user.delete()
            delete user.password
        res.json({
            user
        });
    } else {
        res.send('Username or password incorrect');
    }
});
// const accessTokenSecret = 'youraccesstokensecret';



// router.post('/api/login', async (req, res) => {
//     // Read username and password from request body
//     var { username, password } = req.body;
//     console.log(username)
//     console.log(password)
//     let getUser
//     try {

//         getUser = await userSchema.find({});
//         // const getUser = await userSchema.find({});
//         // a = getUser
//     } catch (e) {
//         res.status(400).send(e);
//     }
//     // console.log(getUser);
//     // console.log(a);
//     // Filter user from the users array by username and password
//     const login = getUser.find(u => { return u.username === username && u.data.password === password });

//     if (login) {
//         // Generate an access token
//         const accessToken = jwt.sign({ username: login.username, role: login.role }, accessTokenSecret);
//             // login.delete()
//             delete login.data['password']
//         res.json({
//             accessToken,login
//         });
//     } else {
//         res.send('Username or password incorrect');
//     }
// });
// const accessTokenSecret = 'youraccesstokensecret';




// router.get("/login", async (req, res) => {
//     try {
//         const getUser = await userSchema.find({}).sort({ "roll_no": 1 });
//         res.send(getUser);

//     } catch (e) {
//         res.status(400).send(e);
//     }
//     res.send("Successfull")
// })

router.get("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await userSchema.findById({ _id });
        res.send(getUser);

    } catch (e) {
        res.status(400).send(e);
    }
    res.send("Successfull")
})
router.patch("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await parentSchema.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getUser);

    } catch (e) {
        res.status(500).send(e);
    }
    res.send("Successfull")
})
router.delete("/login/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getUser = await userSchema.findByIdAndDelete(_id);
        res.send(getUser);

    } catch (e) {
        res.status(500).send(e);
    }
    res.send("Successfull")
})
// =========================================================================================

// ===========================Login POST==========================
router.post("/api/login", async (req, res) => {
    try {
        const addingUserRecord = new userSchema(req.body)
        console.log(req.body);
        const inserUser = await addingUserRecord.save();
        res.status(201).send(inserUser);
        addingUserRecord.save();
    } catch (e) {
        res.status(400).send(e);
    }
    res.send("Successfull")
})


module.exports = router;