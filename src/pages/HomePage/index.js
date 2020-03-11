import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { QuizService } from '../../services/api'
import { CategoryButton } from '../../components';
import { PageContainer, ItemsContainer, PageContent } from './style';
import { BigLabel } from '../../theme/globalStyle';

function HomePage() {

  const [categories, setCategories] = useState([])
  const [toQuestion, setToQuestion] = useState(false)

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const data = await QuizService.getCategories()
    setCategories(data)
  }

  const handleClick = (id) => () => {
    setToQuestion(true)
  }

  if (toQuestion) return <Redirect to='/question' />


  return (
    <PageContainer>
      {
        categories.length > 1 ?
          <PageContent>
            <BigLabel>Categorias</BigLabel>
            <ItemsContainer>
              {
                categories.map( item =>
                  <CategoryButton
                    label={item.name}
                    onClick={handleClick(item.id)}
                  />
                )
              }
            </ItemsContainer>
          </PageContent>
        :
        // Spínner
        <></>
      }
    </PageContainer>
  );
}

export default HomePage;
