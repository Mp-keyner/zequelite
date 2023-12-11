import { Router } from "express";
import {
  getComments,
  getCommentsById,
  postComment,
} from "../controllers/Publication";

const router = Router();
router.get("/", getComments);
router.post("/", postComment);
router.get("/:id", getCommentsById);

export default router;
