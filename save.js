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
  
  const titleCased = () => {
    let newTutorials = tutorials.map(function (element) 
    {
      let lowerCaseSplitTutorials = element.toLowerCase().split(' ');
      let newLowerCaseSplitTutorials = lowerCaseSplitTutorials.map(function (element)
      {
        let splittedWord = element.split(''); //return splitted words
        let firstLetters = element.toUpperCase().charAt(0); //return first letters capitalized
        splittedWord.shift();
        let join = splittedWord.join('');
        let madeUpWord = [firstLetters + join];
        //let joined = madeUpWord.join('');
        //return join;
        return madeUpWord;
      })
      return newLowerCaseSplitTutorials;
    })
    return newTutorials;
  }
  
  
  console.log(titleCased());