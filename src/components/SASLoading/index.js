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
    />
  )
  return (
    <Loader
      type="TailSpin"
      color={theme.color.header}
      height={60}
      width={60}
    />
  );
}

export default SASLoading;
