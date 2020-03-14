export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_NEW_QUESTION = 'SET_NEW_QUESTION';

export const setCategory = (data) => ({
  type: SET_CATEGORY,
  payload: data,
});

export const setNewQuestion = (data) => ({
  type: SET_NEW_QUESTION,
  payload: data,
});


const INITIAL_STATE = {
  selectedCategory: {},
  currentQuestion: [],
  questionCounter: 0,
  lastAnswer: '', // c: correct, w: wrong
}

export default function reducer(state = INITIAL_STATE, action) {
  console.log('redux: ', action.payload)
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case SET_NEW_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
        questionCounter: state.questionCounter + 1
      };
    default:
      return state;
  }
}