import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { QuizService } from '../../services/api'
import { CategoryButton } from '../../components';
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
    // TODO: spinner
    dispatch(setCategory(item))
    await QuizService.getQuestion(dispatch)(item.id)
  }

  if (hasQuestion) return <Redirect to='/question' />

  if (!categories || categories.length < 1) return <></>

  return (
    <PageContainer>
      <ScreenTitle>Categorias</ScreenTitle>
      <ItemsContainer>
        {
          categories.map( item =>
            <CategoryButton
              label={item.name}
              onClick={handleClick(item)}
            />
          )
        }
      </ItemsContainer>
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  hasQuestion: MainReducer.currentQuestion.length > 0,
});

export default connect(mapStateToProps)(HomePage);

