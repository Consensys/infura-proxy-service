/* --- Global --- */
import {Position, Toaster} from '@blueprintjs/core';

/* --- ToastContainer :  Blueprint : Component --- */
export const ToastContainer = Toaster.create({
  className: 'recipe-toaster',
  position: Position.TOP_RIGHT,
});
