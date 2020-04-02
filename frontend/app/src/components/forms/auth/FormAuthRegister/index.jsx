/**
 * @name FormAuthRegister
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {useEffect, useReducer} from 'react';
import {PropTypes} from 'prop-types';
import {redirectTo} from '@reach/router';
import {useForm} from 'react-hook-form';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

/* --- Mutation : GraphQL --- */
const AUTH_REGISTER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

/* --- FormAuthRegister : Component --- */
const FormAuthRegister = ({styled, ...props}) => {
  /* ------------------- */
  // Reducer & State
  /* ------------------- */

  /* --- Form : State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Local : State --- */
  const initialState = {
    init: false,
    status: false,
    username: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  };

  /* --- Reducer : State --- */
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_REGISTRATION':
        return {
          ...state,
          init: true,
          ...action.payload,
          mutation: action.mutation,
        };
      case 'SET_REGISTRATION_COMPLETE':
        return {
          ...state,
          status: true,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  /* ------------------- */
  // Actions
  /* ------------------- */
  /* --- Submit : Action : Form --- */
  const onSubmit = (values, mutation) => {
    if (values) {
      dispatch({
        type: 'SET_REGISTRATION',
        payload: values,
        mutation: mutation,
      });
    }
  };

  /* ------------------- */
  // Effects
  /* ------------------- */
  /* --- Contract Send Transaction : Effect --- */
  useEffect(() => {
    if (state.init) {
      state
        .mutation()
        .then(async ({data}) => {
          localStorage.setItem('token', data.signUp.token);
          dispatch({type: 'SET_REGISTRATION_COMPLETE'});
        })
        .catch(async error => {
          console.log(error, 'error mutationRequest');
        });
    }
  }, [state.init]);

  useEffect(() => {
    if (state.status) {
      redirectTo('/auth');
    }
  }, [state.status]);

  /* ------------------- */
  // Actions
  /* ------------------- */
  const {username, email, password} = state;

  return (
    <Mutation mutation={AUTH_REGISTER} variables={{username, email, password}}>
      {(authRegister, {data, loading, error}) => (
        <Atom.Box>
          <form
            onSubmit={handleSubmit(values => onSubmit(values, authRegister))}>
            <Molecule.Field
              name="username"
              placeholder="Username"
              register={register}
              errors={errors}
              sx={{}}
            />
            <Molecule.Field
              name="email"
              type="email"
              placeholder="Email"
              register={register}
              errors={errors}
              sx={{}}
            />
            <Molecule.Field
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              errors={errors}
              sx={{}}
            />
            <Molecule.Field
              name="passwordConfirmation"
              type="password"
              placeholder="Password Confirmation"
              register={register}
              errors={errors}
              sx={{}}
            />
            <Atom.Button
              bg="blue"
              color="white"
              disabled={loading}
              sx={{mt: 3, width: '100%'}}>
              <Atom.Span>{props.label}</Atom.Span>
            </Atom.Button>
          </form>
        </Atom.Box>
      )}
    </Mutation>
  );
};

FormAuthRegister.defaultProps = {
  label: 'Login',
};

FormAuthRegister.propTypes = {
  styled: PropTypes.object,
};

export default FormAuthRegister;
