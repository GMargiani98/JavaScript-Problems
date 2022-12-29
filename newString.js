// write a  JS program to create a new string adding "New!" in front of a given string. if the given string begins with "New!" then return the original string

const addNew = (string) =>
  string.indexOf('New!') === 0 ? string : `New! ${string}`;
