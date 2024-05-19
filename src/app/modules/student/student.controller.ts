import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student has been created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'successfully got data',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// find a specific student with Id

const getASpecificStudent = async (req: Request, res: Response) => {
  const studentId = req.params.studentId;

  const result = await studentServices.getSpecificStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'successfully got a student from DB',
    data: result,
  });
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getASpecificStudent,
};
