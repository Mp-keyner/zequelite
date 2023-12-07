import { Router } from "express";
import {
  deletePublication,
  getComments,
  getPublication,
  getPublications,
  postComment,
  postPublication,
  updatePublication,
} from "../controllers/Publication";

const router = Router();
router.get("/", getPublications);
router.get("/:id", getPublication);
router.post("/", postPublication);
router.put("/:id", updatePublication);
router.delete("/:id", deletePublication);

router.get("/comments", getComments);
router.post("/comments", postComment);

export default router;
