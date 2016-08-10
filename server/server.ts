import * as express from "express";
import * as path from "path";

let app = express();

app.use("/", express.static(path.join(__dirname, "..", "client")));
app.use("/featureAreas", express.static(path.join(__dirname, "..", "client", "app", "featureAreas")));
app.use("/node_modules", express.static(path.join(__dirname, "..", "node_modules")));

const server = app.listen(8000, "localhost", () => {

    const {address, port} = server.address();

    console.log(`Server listening on http://localhost:${port}`);
});



