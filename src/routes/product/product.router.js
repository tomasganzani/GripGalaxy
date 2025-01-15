import { Router } from "express";
import { prodController } from "../../controllers/product.manager.js";
import { roleAuth } from "../../middlewares/roleAuth.js";
const router = Router();

router.get("/", prodController.getAll);
router.get("/:id", prodController.getById);
router.post("/", [roleAuth("admin")] , prodController.create);
router.post("/dto", [roleAuth("admin")] ,prodController.createProd);
router.put("/:id", [roleAuth("admin")] ,prodController.update);
router.delete("/:id", [roleAuth("admin")] ,prodController.delete);

export default router;
