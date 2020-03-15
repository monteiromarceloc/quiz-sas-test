export const RESET = 'RESET';
export const SET_SHOW_RESULTS = 'SHOW_RESULTS';
export const PUSH_ANSWER_LOG = 'SET_ANSWER_LOG';

export const reset = () => ({
  type: RESET,
});

export const setShowResults = () => ({
  type: SET_SHOW_RESULTS,
});

export const pushAnswerLog = () => ({
  type: PUSH_ANSWER_LOG,
});

const INITIAL_STATE = {
  showingResults: false,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case SET_SHOW_RESULTS:
        return {
          showingResults: true,
        }
      case RESET:
        return INITIAL_STATE
    default:
      return state;
  }
}