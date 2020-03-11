import axios from 'axios'

const BASE_URL = 'https://opentdb.com'

// TODO: send data to redux

export const QuizService = {
  getCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api_category.php`);
      return response.data.trivia_categories;
    } catch (error) {
      console.log('getCategorys error: ', error)
    }
  },
  getQuestions: async (id = 9) => {
    try {
      const response = await axios.get(`${BASE_URL}/api.php?category=${id}&amount=10&difficulty=medium&type=multiple`);
      const { response_code, results } = response.data
      if (response_code === 0) return results;
      // TODO: handle responde_code
      else return false
    } catch (error) {
      console.log('getCategorys error: ', error)
    }
  }
}