let express = require('express');
let app = express();

let rides = {
    "data" : [
        {
            name : "Pirates of the Caribbean",
            info: "A classic slow dark boat ride through swashbuckling pirate caves and towns."
        },
        {
            name: "Peter Pan’s Flight",
            info: "A suspended dark ride that flies over miniature scenes of London and Neverland."
        },
        {
            name: "Space Mountain",
            info: "An indoor space-themed dark roller coaster in the dark."
        }
    ]
   
}

//app.get('/', (request, response)=> {
    //response.send("boo!");
//})
app.use('/', express.static('public'));


app.get('/about', (request, response)=> {
    response.send("this page will be your final resting place");
})

app.get('/rides', (req,res)=> {
    res.json(rides);
})

app.get('/rides/:rides', (req,res) => {
    console.log(req.params);
    let user_rides = req.params.rides;
    let user_obj;
    for(let i=0; i<rides.data.length; i++) {
        if(user_rides == rides.data[i].name) {
            user_obj = rides.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    } else {
        res.json({status: "sowyy we aint got this one yet"})
    }

    res.send("hi");
})



app.listen(4500, ()=> {
    console.log("app is listening at localhost:4500")
})