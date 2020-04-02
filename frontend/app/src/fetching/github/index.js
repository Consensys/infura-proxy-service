/* --- Global --- */
import axios from 'axios';
/* --- Local --- */
import {convertObjectToURLParameters} from '@src/utilities';
/* ============================================== */
// User: Github : Fetching
/* ============================================== */
export const fetchGithubUser = async user => {
  let response;
  try {
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}query/github/user/${user}`,
      );
      return response;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}query/github/user/${user}`,
      );
      return response;
    }
  } catch (error) {
    console.log(error, 'ERROR REQUEST');
  }
};

export const fetchGithubUserList = async () => {
  let response;
  try {
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}query/github/users`,
      );
      return response;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}query/github/users`,
      );
      return response;
    }
  } catch (error) {
    console.log(error, 'ERROR REQUEST');
  }
};

/* ============================================== */
// Repo : Github : Fetching
/* ============================================== */

/**
 * @func fetchGithubRepoList
 * @description Request a Github repo list using searchParameters.
 * @param {*} searchRequest
 */
export const fetchGithubRepo = async searchRequest => {
  let response;
  try {
    const urlParamters = convertObjectToURLParameters(searchRequest);
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}query/github/repo/list?${urlParamters}`,
      );
      console.log(response, 'response');
      return response;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}query/github/repo/list`,
      );
      return response;
    }
  } catch (error) {
    console.log(error, 'ERROR REQUEST');
  }
};

/**
 * @func fetchGithubRepoList
 * @description Request a Github repo list using searchParameters.
 * @param {*} searchRequest
 */
export const fetchGithubRepoList = async searchRequest => {
  let response;
  try {
    const urlParamters = convertObjectToURLParameters(searchRequest);
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}query/github/repo/list?${urlParamters}`,
      );
      console.log(response, 'response');
      return response;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}query/github/repo/list`,
      );
      return response;
    }
  } catch (error) {
    console.log(error, 'ERROR REQUEST');
  }
};

/**
 * @func fetchGithubUserRepoList
 * @description Request a Github user's repos
 * @param {*} user
 */
export const fetchGithubUserRepoList = async user => {
  let response;
  try {
    // IF application MODE is DEVEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
      response = await axios.get(
        `${process.env.REACT_APP_DEVELOPMENT_API}query/github/repo/${user}/list`,
      );
      return response;
    }
    // IF application MODE is PRODUCTION
    else {
      response = await axios.get(
        `${process.env.REACT_APP_PRODUCTION_API}query/github/repo/${user}/list`,
      );
      return response;
    }
  } catch (error) {
    console.log(error, 'ERROR REQUEST');
  }
};
