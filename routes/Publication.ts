import { Router } from "express";
import {
  deletePublication,
  getPublication,
  getPublications,
  getPublicationsByTheme,
  postPublication,
  updatePublication,
} from "../controllers/Publication";

const router = Router();
router.get("/", getPublications);
router.get("/:theme", getPublicationsByTheme);
router.get("/id/:id", getPublication);
router.post("/", postPublication);
router.put("/id/:id", updatePublication);
router.delete("/id/:id", deletePublication);
export default router;
