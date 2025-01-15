export interface FieldsErrors {
  title: string;
  grade: string;
  description: string;
  studentId: string;
}

export function validateFormAssessment(
  title: string,
  description: string,
  grade: number,
  studentId: string
) {
  const errors: FieldsErrors = {} as FieldsErrors;

  if (title.length < 3) {
    errors.title = "Title must have min 3 characters";
  }

  if (description.length < 3) {
    errors.description = "Description must have min 3 characters";
  }

  if (!grade || grade < 0 || grade > 10) {
    errors.grade = "Grade must be between 0 and 10";
  }

  if (!studentId) {
    errors.grade = "Must provide a student identification";
  }

  return errors;
}
