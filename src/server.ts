import app from "./app";
import dotenv from "dotenv";

// LOAD ENV VARIABLES
dotenv.config();

// DEFINE PORT  
const PORT: number = Number(process.env.PORT) || 3000;

// START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
