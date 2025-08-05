import express from 'express';
import { createStudent, deleteStudent, getStudent, getTargetStudent, updateStudent } from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getStudent);
router.get('/:id', getTargetStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;