import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSpecificStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};
export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSpecificStudentFromDB,
};
