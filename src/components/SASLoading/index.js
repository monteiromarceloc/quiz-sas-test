import React from 'react';
import Loader from 'react-loader-spinner'
import { theme } from '../../theme/globalStyle'

function SASLoading({small}) {
  if (small) return (
    <Loader
      type="TailSpin"
      color={theme.color.white}
      height={30}
      width={30}
      timeout={3000} //3 secs
    />
  )
  return (
    <Loader
      type="TailSpin"
      color={theme.color.header}
      height={60}
      width={60}
      timeout={3000} //3 secs
    />
  );
}

export default SASLoading;
