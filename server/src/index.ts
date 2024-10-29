import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";


dotenv.config();


// CORS configuration to allow all origins
const corsOptions = {
    origin: '*', // This allows all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allow all methods
    allowedHeaders: ['*'], // Specify allowed headers
  };

const app = express();  
app.use(express.json());
// TODO: move back below the routes when done..
// app.use(cors(corsOptions));

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



/* ROUTES */
// app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes); // http://localhost:9000/dashboard
app.use("/products", productRoutes);
app.use("/users", userRoutes); // http://localhost:8000/users
app.use("/expenses", expenseRoutes); // http://localhost:8000/expenses


app.get("/health", (req, res) => {
    res.send("Stockbale API is live");
});




/* SERVER */

const PORT = Number(process.env.PORT) || 9000;
app.listen(
    PORT,
    "0.0.0.0",
    () => console.log(`Server Port: ${PORT}`));