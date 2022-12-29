// write a JS program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. the string lenght must be 3 or more, if not return the original string

const createNewString = (string) =>
  string.length < 3 ? string : string.slice(0, 3) + string.slice(-3);
