const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const registerdata = require('./models/UserReg')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//..............nitin singh

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Welcome to the World")
});

mongoose.connect("mongodb+srv://admin21:admin12@cluster0.xztu3os.mongodb.net/aircon_services?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.post('/register', async (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    var city = req.body.city;
    var state = req.body.state;
    var message = req.body.message;
    var bpassword = await bcrypt.hash(password, 10);
    const user = await registerdata({
        username: username,
        email: email,
        phone: phone,
        password: bpassword,
        city: city,
        state: state,
        message: message,
    })
    try {
        await user.save()
        res.status(200).send("Registration Successfully")
        console.log(req.body)
    } catch (error) {
        console.log(error)
        res.status(200).send("Data not saved")
    }

})

// ..... login

const jwt_secret = "kkbfdkbnlzncjjsblwoiigeiqpkapcjdjvgkiupoiuytrewsfghjklmnmnbvcx1234567890";
app.post('/login', async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await registerdata.findOne({ email: email })
    if (!user) {
        return res.send("User  Does not exit")
    } else if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, jwt_secret)
        return res.json({
            status: "success",
            token: token,
            userdata: user,
        })
    } else {
        return res.json({ status: "error" })
    }
})



//.....deletedata
app.post("/deldata", async (req, res) => {
    var id = req.body.id;
    const user = await registerdata.findByIdAndDelete(id)
    res.status(200).send("data delete")
})


app.get("/getdata", async (req, res) => {
    user = await registerdata.find({})
    res.send(user)
});
//...............

app.listen(8082, () => {
    console.log('http://localhost:8082/')
})