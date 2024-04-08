const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCasedNames = () => {
  return tutorials.map(tutorial => {
    const characters = tutorial.split(' ');
    const titleCased = characters.map(character => character.charAt(0).toUpperCase() + character.slice(1)).join(' ');
    return titleCased;
  });
};

const titleCased = () => {
  return titleCasedNames();
};

console.log(titleCased());


