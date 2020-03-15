export const RESET = 'RESET';
export const SET_SHOW_RESULTS = 'SHOW_RESULTS';
export const PUSH_ANSWER_LOG = 'SET_ANSWER_LOG';

export const reset = () => ({
  type: RESET,
});

export const setShowResults = () => ({
  type: SET_SHOW_RESULTS,
});

export const pushAnswerLog = (data) => ({
  type: PUSH_ANSWER_LOG,
  payload: data
});

const INITIAL_STATE = {
  showingResults: false,
  answerLog: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case SET_SHOW_RESULTS:
        return {
          ...state,
          showingResults: true,
        }
      case PUSH_ANSWER_LOG:
        return {
          ...state,
          answerLog: state.answerLog.concat([action.payload])
        }
      case RESET:
        return INITIAL_STATE
    default:
      return state;
  }
}