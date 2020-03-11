import React, { useState, useEffect } from 'react';
import { QuizService } from '../../services/api'
import { CategoryButton } from '../../components';
import { PageContainer, ItemsContainer, PageContent } from './style';
import { BigLabel } from '../../theme/globalStyle';

function HomePage() {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const data = await QuizService.getCategories()
    setCategories(data)
  }

  const handlePress = (id) => () => {
    
  }

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
                    onPress={handlePress(item.id)}
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
