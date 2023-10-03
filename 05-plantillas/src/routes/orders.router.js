import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {});
router.get("/:idOrders", async (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:idOrders", (req, res) => {});
router.delete("/:idOrders", (req, res) => {});

export default router;