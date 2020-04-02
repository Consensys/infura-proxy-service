/* --- Global --- */
import React from 'react';
import {Span} from '@horizin/atoms';

/* --- Module --- */
import {ToastContainer} from './index';

/* --- Toast :  Blueprint : Component --- */
export const Toast = ({children, msg, sx, ...props}) => {
  const showToast = () => {
    ToastContainer.show({message: msg});
  };

  return (
    <Span sx={sx} {...props} onClick={showToast}>
      {children}
    </Span>
  );
};
