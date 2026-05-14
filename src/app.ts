import express, { Express } from "express";
import cors from "cors";

const app: Express = express();

// MIDDLEWARES
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json());

// ROUTES
app.get("/api/health", (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Server is running"
    });
});

export default app;