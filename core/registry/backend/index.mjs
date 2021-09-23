import express from "express";
import path from "path";
import CONFIG from "@orbit/config";
let __dirname = path.dirname(process.argv[1]);
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/react/build/index.html'));
});

app.use(express.static(path.join(__dirname, '../frontend/react/build')));

app.listen(CONFIG.PORT, () => console.log(`Listening on ${CONFIG.PORT}`));