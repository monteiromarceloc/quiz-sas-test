export const formatText = (oldString) => {
  let newString = oldString
  if (newString.indexOf('&#039;')) newString = newString.split("&#039;").join("'");
  if (newString.indexOf('&quot;')) newString = newString.split("&quot;").join('"');
  if (newString.indexOf('&euml;')) newString = newString.split("&euml;").join('ë');
  return newString;
}
