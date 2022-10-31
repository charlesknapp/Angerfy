document.addEventListener('contextmenu', event => event.preventDefault());

let quotes = [
    `Whoa, who peed in your Cheerios? - Becca Fitzpatrick`,
    `When angry, count four. When very angry, swear. - Mark Twain`,
    `Angry people are not always wise. - Jane Austen`,
    `Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy. - Roy T. Bennett`,
    `Not my daughter, you bitch! - J.K. Rowling`,
    `Never go to bed mad. Stay up and fight. - Phyllis Diller`,
    `Speak when you are angry - and you'll make the best speech you'll ever regret. - Laurence J. Peter`,
    `For every minute you remain angry, you give up sixty seconds of peace of mind. - Ralph Waldo Emerson`,
    `When angry count to ten before you speak. If very angry, count to one hundred. - Thomas Jefferson`,
    `Whatever is begun in anger ends in shame. - Benjamin Franklin`,
    `When anger rises, think of the consequences. - Confucius`,
    `While seeking revenge, dig two graves - one for yourself. - Douglas Horton`,
    `The greatest remedy for anger is delay. - Seneca`,
    `Man should forget his anger before he lies down to sleep. - Mahatma Gandhi`,
    `Men in rage strike those that wish them best. - William Shakespeare`,
    `Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it. - Seneca`,
    `You will not be punished for your anger, you will be punished by your anger. - Buddha`,
    `A quick temper will make a fool of you soon enough. - Bruce Lee`,
    `Anger is never without a reason, but seldom with a good one. - Benjamin Franklin`,
    `The best fighter is never angry. - Lao Tzu`,
    `How much more grievous are the consequences of anger than the causes of it. - Marcus Aurelius`,
    `Anger is the enemy of non-violence and pride is a monster that swallows it up. - Mahatma Gandhi`,
    `When angry count to ten before you speak. If very angry, count to one hundred. - Thomas Jefferson`,
    `For every minute you remain angry, you give up sixty seconds of peace of mind. - Ralph Waldo Emerson`,
    `Anger dwells only in the bosom of fools. - Albert Einstein`
  ];

  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quoteGenius').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
    // Part 8
  document.querySelector('#quoteButton').addEventListener('click', (evt) => {
    $.notify("Angry Quote Generated", 'info')
    randomQuote()
  })
  
    // Part 9
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
    })
  })
  
  
  
  });
  