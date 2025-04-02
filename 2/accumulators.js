const country = ["I", "t", "a", "l", "i", "a"];
country.join("-"); // "I-t-a-l-i-a"
country.join(""); // "Italia"

function join(content, separator) {
  function padContent(index, currentString) {
    currentString += content[index];
    if (index === content.length - 1) {
      return currentString;
    }

    console.log(currentString, index, content.length);

    return padContent(index + 1, currentString + separator);
  }
}

join(country, "-"); // "I-t-a-l-i-a"
join(country, ""); // "Italia"
