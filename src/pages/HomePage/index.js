import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { QuizService } from '../../services/api'
import { CategoryButton } from '../../components';
import { PageContainer, ItemsContainer, ScreenTitle } from './style';
import { setCategory } from '../../store/MainReducer';

function HomePage(props) {
  const { dispatch, currentQuestion } = props
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    const data = await QuizService.getCategories()()
    setCategories(data)
  }

  const handleClick = (id) => async () => {
    // TODO: spinner
    dispatch(setCategory(id))
    await QuizService.getQuestion(dispatch)(id)
  }

  if (currentQuestion.length > 0) return <Redirect to='/question' />

  if (!categories || categories.length < 1) return <></>

  return (
    <PageContainer>
      <ScreenTitle>Categorias</ScreenTitle>
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
    </PageContainer>
  );
}

const mapStateToProps = ({ MainReducer }) => ({
  currentQuestion: MainReducer.currentQuestion,
});

export default connect(mapStateToProps)(HomePage);

