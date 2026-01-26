const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    // Главная страница
    if (req.url === "/" || req.url === "/main.html") {
        const filePath = path.join(__dirname, "..", "front", "space", "main.html");
        const html = fs.readFileSync(filePath);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        return;
    }

    // JS файл
    if (req.url === "/js/main.js") {
        const filePath = path.join(__dirname, "..", "front", "space", "js", "main.js");
        const js = fs.readFileSync(filePath);

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(js);
        return;
    }

    // API: люди
    if (req.url === "/people") {
        const dataPath = path.join(__dirname, "data", "people.json");
        const data = fs.readFileSync(dataPath, "utf-8");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
        return;
    }

    // 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
});

server.listen(PORT, "192.168.1.103", () => {
    console.log("Server running on http://localhost:" + PORT);
});
