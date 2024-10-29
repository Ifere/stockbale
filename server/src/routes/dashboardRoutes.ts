import { Router } from "express";
import { getDashboardData } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardData); // http://localhost:9000/dashboard/"/"

export default router;