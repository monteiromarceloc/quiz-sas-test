import axios from 'axios'
import { setNewQuestion, setPreLoadedQuestion } from '../store/MainReducer';

const BASE_URL = 'https://opentdb.com'

export const QuizService = {
  getCategories: (dispatch, onSucess, onFailure) => async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api_category.php`);
      return response.data.trivia_categories;
    } catch (error) {
      console.log('getCategorys error: ', error)
    }
  },
  getQuestion: (dispatch, onSucess, onFailure) => async (id, difficulty) => {
    try {
      const response = await axios.get(`${BASE_URL}/api.php?category=${id}&amount=1&difficulty=${difficulty || 'medium'}&type=multiple`);
      const { response_code, results } = response.data
      if (response_code === 0) {
        // If difficulty is not a param, we can presume it is the first question
        dispatch(setNewQuestion(results))
        return results[0];
      }
      // TODO: handle responde_code
      console.log('response: ', response_code)
      return false
    } catch (error) {
      console.log('getCategorys error: ', error)
    }
  }
}
