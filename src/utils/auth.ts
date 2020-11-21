export const loginValidation = (
  email: string,
  password: string,
  commonSubstringLength: number = 6
): boolean => {
  // Init matrix for Dynamic Programming
  const matrix = Array(password.length + 1)
    .fill(null)
    .map(() => {
      return Array(email.length + 1).fill(null);
    });

  // Fill the first row and first column with zeros to provide initial values
  for (let col = 0; col <= email.length; col++) {
    matrix[0][col] = 0;
  }
  for (let row = 0; row <= password.length; row++) {
    matrix[row][0] = 0;
  }

  // Find common substring length with Dynamic Programming
  for (let row = 1; row <= password.length; row++) {
    for (let col = 1; col <= email.length; col++) {
      if (email[col - 1] === password[row - 1]) {
        matrix[row][col] = matrix[row - 1][col - 1] + 1;
        if (matrix[row][col] >= commonSubstringLength) {
          return false;
        }
      } else {
        matrix[row][col] = 0;
      }
    }
  }

  return true;
};
