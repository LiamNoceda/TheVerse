const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

function getContentType(url) {
    if (url.endsWith(".html")) return "text/html";
    if (url.endsWith(".css")) return "text/css";
    if (url.endsWith(".js")) return "application/javascript";
    if (url.endsWith(".json")) return "application/json";
    if (url.endsWith(".png")) return "image/png";
    if (url.endsWith(".jpg") || url.endsWith(".jpeg")) return "image/jpeg";
    return "text/plain";
}

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    // API: люди
    if (req.url === "/people") {
        const dataPath = path.join(__dirname, "data", "people.json");
        const data = fs.readFileSync(dataPath, "utf-8");

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
        return;
    }

    // Раздача фронтенда
    let filePath;

    if (req.url === "/" || req.url === "/index.html") {
        filePath = path.join(__dirname, "..", "front", "space", "index.html");
    } else {
        filePath = path.join(__dirname, "..", "front", "space", req.url);
    }

    // Проверяем, существует ли файл
    if (fs.existsSync(filePath)) {
        const contentType = getContentType(filePath);
        const file = fs.readFileSync(filePath);

        res.writeHead(200, { "Content-Type": contentType });
        res.end(file);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
