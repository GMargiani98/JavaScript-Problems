// write a JS program to get the current date. Output mm-dd-yy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
