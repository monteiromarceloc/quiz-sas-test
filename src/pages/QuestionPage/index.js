import React, { useState, useEffect } from 'react';
import { QuizService } from '../../services/api'
import { CategoryButton } from '../../components';
import { PageContainer, ItemsContainer, PageContent } from './style';
import { Label } from '../../theme/globalStyle';

function QuestionPage() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const data = await QuizService.getCategories()
    setCategories(data)
  }

  return (
    <PageContainer>
      {
        categories.length > 1 ?
          <PageContent>
            <Label>História</Label>
            
          </PageContent>
        :
        // Spínner
        <></>
      }
    </PageContainer>
  );
}

export default QuestionPage;
