import express from "express";
import { registerstaff, staffLogin, userLogin, userRegister } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/staff/register', registerstaff);
router.post('/user/register', userRegister);
router.post('/staff/login', staffLogin);
router.post('/user/login', userLogin);

export default router;