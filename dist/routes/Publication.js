"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Publication_1 = require("../controllers/Publication");
const router = (0, express_1.Router)();
router.get("/", Publication_1.getPublications);
router.get("/:id", Publication_1.getPublication);
router.post("/", Publication_1.postPublication);
router.put("/:id", Publication_1.updatePublication);
router.delete("/:id", Publication_1.deletePublication);
router.get("/comments", Publication_1.getComments);
router.post("/comments", Publication_1.postComment);
exports.default = router;
//# sourceMappingURL=Publication.js.map