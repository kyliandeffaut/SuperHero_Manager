import { Router } from "express";
import { requireAuth } from "../middleware/authMiddleware";
import { upload } from "../middleware/uploadMiddleware";
import { listHeroes, getHero, createHero, updateHero, deleteHero } from "../controllers/heroController";

const router = Router();

router.get("/", listHeroes);
router.get("/:id", getHero);
router.post("/", requireAuth, upload.single("image"), createHero);
router.put("/:id", requireAuth, upload.single("image"), updateHero);
router.delete("/:id", requireAuth, deleteHero);

export default router;
