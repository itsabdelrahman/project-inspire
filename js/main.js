$(document).ready(function() {

  // Animate "Click something."
  $('h2').typeIt();

  $(document).on("click", function() {

    // Initially reduce h1 font size
    if (index === 0)
      $('h1').css("font-size", "50px");

    // Update background colour
    $("body").css({
      "background-color": colours[index]
    });

    if (index === colours.length - 1)
      index = 0;
    else
      index++;

    // Update quote
    var randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

    $("h1").text('“' + randomQuote.text + '”');
    $("h2").text(randomQuote.author);

    // Animate author name
    $('h2').typeIt();

  });

});

var index = 0;

// Colours array
var colours = ["#789dd0", "#a2b3cc", "#9da1b6", "#7f7784", "#a69190", "#bf7fbf", "#a3d468", "#9aacb0", "##294d67", "#88d2f6", "#5df977", "#b4fb38", "#ffaaaa"];

// Quotes array
var quotesArray =

  [{
    "author": "Kevin Kruse",
    "text": "Life isn’t about getting and having, it’s about giving and being."
  }, {
    "author": "Napoleon Hill",
    "text": "Whatever the mind of man can conceive and believe, it can achieve."
  }, {
    "author": "Albert Einstein",
    "text": "Strive not to be a success, but rather to be of value."
  }, {
    "author": "Robert Frost",
    "text": "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference."
  }, {
    "author": "Florence Nightingale",
    "text": "I attribute my success to this: I never gave or took any excuse."
  }, {
    "author": "Wayne Gretzky",
    "text": "You miss 100% of the shots you don’t take."
  }, {
    "author": "Amelia Earhart",
    "text": "The most difficult thing is the decision to act, the rest is merely tenacity."
  }, {
    "author": "Babe Ruth",
    "text": "Every strike brings me closer to the next home run."
  }, {
    "author": "W. Clement Stone",
    "text": "Definiteness of purpose is the starting point of all achievement."
  }, {
    "author": "Kevin Kruse",
    "text": "We must balance conspicuous consumption with conscious capitalism."
  }, {
    "author": "John Lennon",
    "text": "Life is what happens to you while you’re busy making other plans."
  }, {
    "author": "Earl Nightingale",
    "text": "We become what we think about."
  }, {
    "author": "Charles Swindoll",
    "text": "Life is 10% what happens to me and 90% of how I react to it."
  }, {
    "author": "Alice Walker",
    "text": "The most common way people give up their power is by thinking they don’t have any."
  }, {
    "author": "Buddha",
    "text": "The mind is everything. What you think you become."
  }, {
    "author": "Chinese Proverb",
    "text": "The best time to plant a tree was 20 years ago. The second best time is now."
  }, {
    "author": "Socrates",
    "text": "An unexamined life is not worth living."
  }, {
    "author": "Woody Allen",
    "text": "Eighty percent of success is showing up."
  }, {
    "author": "Steve Jobs",
    "text": "Your time is limited, so don’t waste it living someone else’s life."
  }, {
    "author": "Vince Lombardi",
    "text": "Winning isn’t everything, but wanting to win is."
  }, {
    "author": "Stephen Covey",
    "text": "I am not a product of my circumstances. I am a product of my decisions."
  }, {
    "author": "Pablo Picasso",
    "text": "Every child is an artist. The problem is how to remain an artist once he grows up."
  }, {
    "author": "Christopher Columbus",
    "text": "You can never cross the ocean until you have the courage to lose sight of the shore."
  }, {
    "author": "Maya Angelou",
    "text": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  }, {
    "author": "Jim Rohn",
    "text": "Either you run the day, or the day runs you."
  }, {
    "author": "Henry Ford",
    "text": "Whether you think you can or you think you can’t, you’re right."
  }, {
    "author": "Mark Twain",
    "text": "The two most important days in your life are the day you are born and the day you find out why."
  }, {
    "author": "Johann Wolfgang von Goethe",
    "text": "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."
  }, {
    "author": "Frank Sinatra",
    "text": "The best revenge is massive success."
  }, {
    "author": "Zig Ziglar",
    "text": "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily."
  }, {
    "author": "Anais Nin",
    "text": "Life shrinks or expands in proportion to one’s courage."
  }, {
    "author": "Vincent Van Gogh",
    "text": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced."
  }, {
    "author": "Aristotle",
    "text": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
  }, {
    "author": "Jesus",
    "text": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."
  }, {
    "author": "Ralph Waldo Emerson",
    "text": "The only person you are destined to become is the person you decide to be."
  }, {
    "author": "Henry David Thoreau",
    "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
  }, {
    "author": "Erma Bombeck",
    "text": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."
  }, {
    "author": "Booker T. Washington",
    "text": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."
  }, {
    "author": " Ancient Indian Proverb",
    "text": "Certain things catch your eye, but pursue only those that capture the heart."
  }, {
    "author": "Theodore Roosevelt",
    "text": "Believe you can and you’re halfway there."
  }, {
    "author": "George Addair",
    "text": "Everything you’ve ever wanted is on the other side of fear."
  }, {
    "author": "Plato",
    "text": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
  }, {
    "author": "Maimonides",
    "text": "Teach thy tongue to say, “I do not know,” and thous shalt progress."
  }, {
    "author": "Arthur Ashe",
    "text": "Start where you are. Use what you have. Do what you can."
  }, {
    "author": "Japanese Proverb",
    "text": "Fall seven times and stand up eight."
  }, {
    "author": "Helen Keller",
    "text": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us."
  }, {
    "author": "Confucius",
    "text": "Everything has beauty, but not everyone can see."
  }, {
    "author": "Anne Frank",
    "text": "How wonderful it is that nobody need wait a single moment before starting to improve the world."
  }, {
    "author": "Lao Tzu",
    "text": "When I let go of what I am, I become what I might be."
  }, {
    "author": "Maya Angelou",
    "text": "Life is not measured by the number of breaths we take, but by the moments that take our breath away."
  }, {
    "author": "Dalai Lama",
    "text": "Happiness is not something readymade.  It comes from your own actions."
  }, {
    "author": "Sheryl Sandberg",
    "text": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on."
  }, {
    "author": "Latin Proverb",
    "text": "If the wind will not serve, take to the oars."
  }, {
    "author": "Unknown",
    "text": "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground."
  }, {
    "author": "Marie Curie",
    "text": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
  }, {
    "author": "Les Brown",
    "text": "Too many of us are not living our dreams because we are living our fears."
  }, {
    "author": "Joshua J. Marine",
    "text": "Challenges are what make life interesting and overcoming them is what makes life meaningful."
  }, {
    "author": "Booker T. Washington",
    "text": "If you want to lift yourself up, lift up someone else."
  }, {
    "author": "Leonardo da Vinci",
    "text": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  }, {
    "author": "Jamie Paolinetti",
    "text": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."
  }, {
    "author": "Erica Jong",
    "text": "You take your life in your own hands, and what happens? A terrible thing, no one to blame."
  }, {
    "author": "Bob Dylan",
    "text": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."
  }, {
    "author": "Benjamin Franklin",
    "text": "I didn’t fail the test. I just found 100 ways to do it wrong."
  }, {
    "author": "Bill Cosby",
    "text": "In order to succeed, your desire for success should be greater than your fear of failure."
  }, {
    "author": " Albert Einstein",
    "text": "A person who never made a mistake never tried anything new."
  }, {
    "author": "Chinese Proverb",
    "text": "The person who says it cannot be done should not interrupt the person who is doing it."
  }, {
    "author": "Roger Staubach",
    "text": "There are no traffic jams along the extra mile."
  }, {
    "author": "George Eliot",
    "text": "It is never too late to be what you might have been."
  }, {
    "author": "Oprah Winfrey",
    "text": "You become what you believe."
  }, {
    "author": "Vincent van Gogh",
    "text": "I would rather die of passion than of boredom."
  }, {
    "author": "Unknown",
    "text": "A truly rich man is one whose children run into his arms when his hands are empty."
  }, {
    "author": "Ann Landers",
    "text": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."
  }, {
    "author": "Abigail Van Buren",
    "text": "If you want your children to turn out well, spend twice as much time with them, and half as much money."
  }, {
    "author": "Farrah Gray",
    "text": "Build your own dreams, or someone else will hire you to build theirs."
  }, {
    "author": "Jesse Owens",
    "text": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at."
  }, {
    "author": "Sir Claus Moser",
    "text": "Education costs money. But then so does ignorance."
  }, {
    "author": "Rosa Parks",
    "text": "I have learned over the years that when one’s mind is made up, this diminishes fear."
  }, {
    "author": "Confucius",
    "text": "It does not matter how slowly you go as long as you do not stop."
  }, {
    "author": "Oprah Winfrey",
    "text": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."
  }, {
    "author": "Dalai Lama",
    "text": "Remember that not getting what you want is sometimes a wonderful stroke of luck."
  }, {
    "author": "Maya Angelou",
    "text": "You can’t use up creativity. The more you use, the more you have."
  }, {
    "author": "Norman Vaughan",
    "text": "Dream big and dare to fail."
  }, {
    "author": "Martin Luther King Jr.",
    "text": "Our lives begin to end the day we become silent about things that matter."
  }, {
    "author": "Teddy Roosevelt",
    "text": "Do what you can, where you are, with what you have."
  }, {
    "author": "Tony Robbins",
    "text": "If you do what you’ve always done, you’ll get what you’ve always gotten."
  }, {
    "author": "Gloria Steinem",
    "text": "Dreaming, after all, is a form of planning."
  }, {
    "author": "Mae Jemison",
    "text": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."
  }, {
    "author": "Beverly Sills",
    "text": "You may be disappointed if you fail, but you are doomed if you don’t try."
  }, {
    "author": "Eleanor Roosevelt",
    "text": "Remember no one can make you feel inferior without your consent."
  }, {
    "author": "Grandma Moses",
    "text": "Life is what we make it, always has been, always will be."
  }, {
    "author": "Ayn Rand",
    "text": "The question isn’t who is going to let me; it’s who is going to stop me."
  }, {
    "author": "Henry Ford",
    "text": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
  }, {
    "author": "Abraham Lincoln",
    "text": "It’s not the years in your life that count. It’s the life in your years."
  }, {
    "author": "Norman Vincent Peale",
    "text": "Change your thoughts and you change your world."
  }, {
    "author": "Benjamin Franklin",
    "text": "Either write something worth reading or do something worth writing."
  }, {
    "author": "Audrey Hepburn",
    "text": "Nothing is impossible, the word itself says, “I’m possible!”"
  }, {
    "author": "Steve Jobs",
    "text": "The only way to do great work is to love what you do."
  }, {
    "author": "Zig Ziglar",
    "text": "If you can dream it, you can achieve it."
  }]
