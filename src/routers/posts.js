const express = require("express");
const postRouter = express.Router();

postRouter.get("/greet", (req, res) => {
    const name = req.query.name || "bạn";
    res.json({ message: `Xin chào, ${name}!` });
});

postRouter.get("/sum", (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    res.json({ sum: a + b });
});

module.exports = postRouter;
