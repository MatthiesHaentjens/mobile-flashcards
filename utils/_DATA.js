let decks = {
  "xxx": {
    id: "xxx",
    image: "https://static.ffx.io/images/$zoom_0.3767%2C$multiply_0.3541%2C$ratio_1%2C$width_1059%2C$x_412%2C$y_111/t_crop_custom/q_86%2Cf_auto/27220a93e34d3c6d2eb7cdd3eb9f5b40d7933685",
    title: "Kings in Thailand",
    questions: [
      {
        id: "1",
        question: "What is the name of King Rama IV",
        answer: "Mongkut"
      },
      {
        id: "2",
        question: "What is the name of King Rama V",
        answer: "Chulalongkorn"
      },
      {
        id: "3",
        question: "What is the name of King Rama IX",
        answer: "Bhumibol"
      }
    ]
  },
  "yyy": {
    id: "yyy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqEJOWPxYyY7ZuBpgcZ4MBpHH2TzMqA6F6g&usqp=CAU",
    title: "Capital cities",
    questions: [
      {
        id: "1",
        question: "What is the capital of Thailand",
        answer: "Bangkok"
      },
      {
        id: "2",
        question: "What is the capital of Malaysia",
        answer: "Kuala Lumpur"
      },
      {
        id: "3",
        question: "What is the capital of Spain",
        answer: "Madrid"
      }
    ]
  },
  "zzz": {
    id: "zzz",
    image: "http://codingthailand.com/blog/wp-content/uploads/2016/05/javascript-736400_640-246x246.png",
    title: "JavaScript",
    questions: [
      {
        id: "1",
        question: "How do you catch a potential error in a Promise?",
        answer: "Add a .catch() statement at the end of the promise chain"
      },
      {
        id: "2",
        question: "What does a .then() statement in a Promise chain do?",
        answer: "Resolves the promise"
      },
      {
        id: "3",
        question: "What are the alternatives for Promises?",
        answer: "Callbacks and asycn / await"
      }
    ]
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...decks }), 1000);
  });
}

export function _addDeck(title) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [generateUID()]: {
            id: generateUID(),
            title: title,
            questions: []
          }
        };
  
        res(decks[id]);
      }, 1000);
    });
  }
  
  export function _deleteDeck(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks[id] = {};
        delete decks[id];
        res(decks);
      }, 1000);
    });
  }
  
  export function _addQuestion(question, deckId) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [deckId]: {
            ...decks[deckId],
            questions: decks[deckId].questions.concat([question])
          }
        };
        res(decks[deckId]);
      }, 1000);
    });
  }
  
  export function _deleteQuestion(questionId, deckId) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [deckId]: {
            ...decks[deckId],
            questions: decks[deckId].questions.filter(q => q.id !== questionId)
          }
        };
        res(decks[deckId]);
      }, 1000);
    });
  }
