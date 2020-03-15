export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_NEW_QUESTION = 'SET_NEW_QUESTION';
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const FINISH_GAME = 'FINISH_GAME';

export const setCategory = (data) => ({
  type: SET_CATEGORY,
  payload: data,
});

export const setNewQuestion = (data) => ({
  type: SET_NEW_QUESTION,
  payload: data,
});

export const setLastAnswer = (data) => ({
  type: SET_LAST_ANSWER,
  payload: data,
});

export const setShowModal = (open, didHit) => ({
  type: SET_SHOW_MODAL,
  payload: {
    open,
    didHit,
  }
});

export const finishGame = () => ({
  type: FINISH_GAME,
});

const INITIAL_STATE = {
  selectedCategory: {},
  currentQuestion: [],
  questionCounter: 0,
  lastAnswer: '', // c: correct, w: wrong
  showModal: false,
  showingResults: false,
}

export default function reducer(state = INITIAL_STATE, action) {
  console.log('redux ', action.type, ': ', action.payload)
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
        questionCounter: state.questionCounter + 1,
      };
    case SET_LAST_ANSWER:
      return {
        ...state,
        lastAnswer: action.payload
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload.open,
        didHit: action.payload.didHit,
      };
      case FINISH_GAME:
        return {
          ...INITIAL_STATE,
          showingResults: true,
        }
    default:
      return state;
  }
}