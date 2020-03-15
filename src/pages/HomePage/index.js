import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import { QuizService } from '../../services/api'
import { CategoryButton, SASLoading } from '../../components';
import { PageContainer, ItemsContainer, ScreenTitle } from './style';
import { setCategory } from '../../store/MainReducer';

function HomePage(props) {
  const { dispatch, hasQuestion } = props
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const data = await QuizService.getCategories()()
    setCategories(data)
  }

  const handleClick = (item) => async () => {
    dispatch(setCategory(item))
    await QuizService.getQuestion(dispatch)(item.id)
  }

  if (hasQuestion) return <Redirect to='/question' />

  return (
    <PageContainer>
      <ScreenTitle>Categorias</ScreenTitle>
      {
        (!categories || categories.length < 1)
        ? <SASLoading />
        : <ItemsContainer>
          {
            categories.map( item =>
              <CategoryButton
                label={item.name}
                onClick={handleClick(item)}
              />
            )
          }
        </ItemsContainer>
      }
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  hasQuestion: MainReducer.currentQuestion.length > 0,
});

export default connect(mapStateToProps)(HomePage);

