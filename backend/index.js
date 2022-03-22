const express = require('express');
const cors = require("cors"); //cross origin
const app = express(); //express
const mysql = require('mysql'); //mysql
var axios = require("axios").default;


const bcrypt = require('bcrypt');
const saltrounds = 10;

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({extended: true}));



//WHEN DEPLOYING CHANGE THE ORIGIN TO "http://34.70.157.84" before deploying on GCP
//Note also need to change frontend --> components --> api and change the fetch ip there
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
    
}));

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
   extended: true
}))

/*
const db = mysql.createConnection({ //connection to the mysql database
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'algolearner'
});
*/

app.use(session({
    key: "userId",
    secret: "algo",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60*60*2400
    },
})
);
/*
db.connect(function(err){ //connect
    if(err) throw err;
    console.log('Database connected'); 
});
*/

/*
* THESE ARE USED FOR USER REGISTRATION AND LOGIN
*
*
*
 */
/*
app.post('/api/register', (req,res) =>{
    const username = req.body.username;  //recieves form username
    const password = req.body.password; //recieves form password
    
    bcrypt.hash(password, saltrounds, (err, hash) =>{ //encrypt password before inserting
        if (err){
            console.log(err); //console log error is there is
        }
        
        db.query(`INSERT INTO users (username,password) VALUES('${username}', '${hash}');`, //inserting into mysql database for users
    
            (err, result) =>{
                if (err){
                    console.log(err);
                    res.send({message: "Error"});
                }
                else {
                    db.query(`INSERT INTO userLevel (username,currentLevel) VALUES('${username}', 0);`,
                        () =>{
                            res.send({message: "Registered"})

                        })
                    
                }

            }
        );
    })

});*/
   


/*
app.post('/api/login', (req, res) =>{
    const username = req.body.username;  //recieves form username
    const password = req.body.password; //recieves form password

    db.query(`SELECT * FROM users WHERE username = '${username}';`,
    (err, result) =>{
        if (err){
            res.send({err: err})
        }

        if (result.length >0){//if there is a result password
            bcrypt.compare(password, result[0].password, (error, response) =>{ //compare password with the bcrypt variant
                if(response){
                    req.session.user = result;
                    res.send({login:"Logged In"});
                }
                else {
                    res.send({message: "Incorrect username or password."})
                }    
            });
        } 
        else {
            res.send({message: "Incorrect username or password."})
        }


    }
    )
});
*/
app.get('/api/login', (req, res) =>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user}); //sends the loggedIn as true
    }
    else{
        res.send({loggedIn: false, user: req.session.user}); //sends the loggedIn as true
    }
    
});
app.get('/api/signout', (req,res) =>{
    res.clearCookie('userId').send("Signed out"); //clears the cookie when you click on the signout
})

app.post('/api/getStep', (req,res) =>{
    const d = req.body.depth;  //receive step
    const arr = req.body.arr;  //receive array
    
    console.log(d);
    console.log(arr);
    
    var depth = d;
    var sorting=[]
    var breakdown=[]

    function MergeSort(array)
    {
    if( depth > 0)
    {
        if(array.length<2 )
        {
        return array
        }
    
    
        var mid=Math.round(array.length/2)
        var left=array.slice(0,mid)
        var right=array.slice(mid,array.length)
    
        depth--
        var leftSorted=MergeSort(left)
        var rightSorted=MergeSort(right)
    
        return Merge(leftSorted,rightSorted)
    }
    else
    {
        breakdown.push(array)
        return array
    }
    
    }


    function Merge(leftArray,rightArray)
    {

    var num=0, num3=0, num2=0
    var array=[]

    while(num<leftArray.length && num2<rightArray.length)
    {
        if(leftArray[num]<= rightArray[num2])
        {
        array[num3++]=leftArray[num++]
        }
        else
        {
        array[num3++]=rightArray[num2++]
        }
    }

    while(num<leftArray.length)
    {
        array[num3++]=leftArray[num++]
    }
    while(num2<rightArray.length)
    {
        array[num3++]=rightArray[num2++]
    }
    sorting.push(array)

    return array

    
    }
    

    let fullArr = MergeSort(arr);


    res.send({"break": breakdown, "full": sorting});

});



app.listen(3001, ()=>{
    console.log("running on port 3001");
 }); //listen to 3001
