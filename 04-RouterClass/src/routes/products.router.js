import { Router } from "express";

const router = Router()

router.get("/api/products", (req, res) => { })
router.get("/api/products/:idProduct", async (req, res) => { });
router.post("/api/products", (req, res) => { });
router.put("/api/products/:idProduct", (req, res) => { });
router.delete("/api/products/:idProduct", (req, res) => { });

export default router