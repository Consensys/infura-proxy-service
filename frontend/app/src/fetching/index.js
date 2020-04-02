import axios from 'axios';

console.log(process.env, 'process.env');
export const fetchTransaction = async tx => {
  let response;
  try {
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}cache/transaction/${tx}`,
      );

      console.log(response, 'response');
      return response.data;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}cache/transaction/${tx}`,
      );
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
