const correctAnswers = {
  numOfWarning: 1,
  numOfP: 3,
  text: 'I has some text',
  numInPrimary: 3,
  textInSecondary: 'Is',
  textInButton: 'Send Cancel',
};
const answers = getDOMInfo();
Object.keys(correctAnswers).forEach(k => {
  const elem = document.getElementById(k);
  const answerGiven = answers[k];
  const isCorrect = answerGiven == correctAnswers[k];
  elem.querySelector('div').innerHTML = answerGiven;
  elem.className = isCorrect ? 'correct' : 'incorrect';
})

document.querySelector('.results').style.display = 'flex';
