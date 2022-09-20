import express from "express";
import { getEvaluatedData } from "../controller/evaluationController.js";

// define router
const router = express.Router();

router.get("/evaluation", getEvaluatedData);
export default router;
