import axios from 'axios'

const BASE_URL = 'https://opentdb.com'

export const QuizService = {
  getCategories: async (data) => {
    try {
      const response = await axios.get(`${BASE_URL}/api_category.php`);
      console.log('response: ', response.data.trivia_categories)
      return response.data.trivia_categories;
    } catch (error) {
      console.log('getCategorys error: ', error)
    }
  }
}