import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// here we will call the controller function
router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getASpecificStudent);

export const StudentRoutes = router;
