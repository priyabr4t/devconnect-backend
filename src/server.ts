import app from "./app";
import dotenv from "dotenv";
import connectDB from "./configs/db";

// LOAD ENV VARIABLES
dotenv.config();

// DEFINE PORT  
const PORT: number = Number(process.env.PORT) || 3000;



const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
}
startServer();
