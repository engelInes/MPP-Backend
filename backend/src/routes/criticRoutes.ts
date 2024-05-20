import express from "express";
import {
  addCritic,
  deleteCritic,
  getCriticById,
  getCritics,
  updateCritic,
} from "../controlers/criticController";

const criticsRouter = express.Router();

criticsRouter.get("/critics", getCritics);
criticsRouter.get("/critics/:id", getCriticById);
criticsRouter.post("/addCritic", addCritic);
criticsRouter.delete("/critics/:id", deleteCritic);
criticsRouter.put("/critics/:id", updateCritic);

export default criticsRouter;
