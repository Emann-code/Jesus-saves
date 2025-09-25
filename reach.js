function splitLetters(str) {
  let vowels = "";
  let consonants = "";
  let v = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
      if (v.indexOf(ch) !== -1) {
        vowels += ch;
      } else {
        consonants += ch;
      }
    }
  }

  return { vowels, consonants };
}

// Example
let result = splitLetters("Hello World");
console.log("Vowels:", result.vowels);
console.log("Consonants:", result.consonants);