import express from 'express';
import fileController from '../controller/fileController';

const router = express.Router();

router.get('/write', (req, res) => fileController.write(req, res));
router.get('/list', (req, res) => fileController.list(req, res));
router.get('/erase', (req, res) => fileController.erase(req, res));
router.get('/read', (req, res) => fileController.read(req, res));

export default router;
