import Express from "express"
import cors from "cors"
import fs from "fs";
import fsp from "fs/promises";

const app = Express();

app.use(Express.json())
app.use(cors(
    { origin: "*" })
)

app.get("/", (req, res) => {
    res.send("Hello from homepage");
})
app.get("/login", (req, res) => {
    res.send("In Login");
})

// CREATE
app.post("/login", (req, res) => {
    const data = req.body;
    console.log(data);
    let sdata = JSON.stringify(data, null, 2);

    console.log(sdata);
    fs.appendFile('C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson 11 Ex1/server/users.json', sdata, (err) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
     });
     res.send("OK");
})


function writeJson(data) {
    fs.writeFileSync('C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson 11 Ex1/server/users.json', data);
}

function appendData(data) {
    fs.appendFile('C:/Users/yduda/Documents/SVCollege-FullStackCourse/MyLesson 11 Ex1/server/users.json', data + "\n");
}


/**
 * Creates an Express application. The express() function is a top-level function exported by the express module.
 */
app.listen(3000, () => {
    console.log("Listening on 3000...");
})