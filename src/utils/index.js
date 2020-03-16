export const formatText = (oldString) => {
  let newString = oldString
  if (newString.indexOf('&#039;')) newString = newString.split("&#039;").join("'");
  if (newString.indexOf('&quot;')) newString = newString.split("&quot;").join('"');
  return newString;
}

// TODO: format string to remove ASCII codes