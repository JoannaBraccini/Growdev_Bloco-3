export interface Student {
  id: string;
  name: string;
  cpf: string;
  age: number | null;
  email: string;
  type: StudentType;
}

export type StudentType = "M" | "F" | "T";

export type QueryStudentRequest = Partial<Pick<Student, "name" | "cpf">>;
