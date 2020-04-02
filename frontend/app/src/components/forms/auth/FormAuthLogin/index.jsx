/**
 * @name FormAuthLogin
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
const AUTH_LOGIN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;

/* --- FormAuthLogin : Component --- */
const FormAuthLogin = ({styled, refetch, ...props}) => {
  console.log(props, 'refetchrefetch');
  /* ------------------- */
  // Reducer & State
  /* ------------------- */

  /* --- Form : State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Local : State --- */
  const initialState = {
    init: false,
    status: false,
    login: undefined,
    password: undefined,
  };

  /* --- Reducer : State --- */
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_LOGIN':
        return {
          ...state,
          init: true,
          login: action.payload.email,
          password: action.payload.password,
          ...action.payload,
          mutation: action.mutation,
        };
      case 'SET_LOGIN_COMPLETE':
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
        type: 'SET_LOGIN',
        payload: values,
        mutation: mutation,
      });
    }
  };

  /* ------------------- */
  // Effects
  /* ------------------- */
  /* --- LoginMutationRequest : Effect --- */
  useEffect(() => {
    if (state.init) {
      state
        .mutation()
        .then(async ({data}) => {
          localStorage.setItem('token', data.signIn.token);
          refetch();
          dispatch({type: 'SET_LOGIN_COMPLETE'});
        })
        .catch(async error => {
          console.log(error, 'error mutationRequest');
        });
    }
  }, [state.init]);

  /* --- Redirect : Effect --- */
  // useEffect(() => {
  //   if (state.status) {
  //     // redirectTo('/auth/account');
  //   }
  // }, [state.status]);

  /* ------------------- */
  // Actions
  /* ------------------- */
  const {login, password} = state;

  return (
    <Mutation mutation={AUTH_LOGIN} variables={{login, password}}>
      {(authRegister, {data, loading, error}) => (
        <Atom.Box>
          <form
            onSubmit={handleSubmit(values => onSubmit(values, authRegister))}>
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
            <Atom.Button
              bg="blue"
              color="white"
              disabled={loading}
              sx={{mt: 3, width: '100%'}}>
              <Atom.Span>{props.label}</Atom.Span>
            </Atom.Button>
          </form>
          <Atom.HorizontalRule sx={{my: 3}} />
          <Atom.Flex evenly>
            <Molecule.Link to="/auth/register">
              <Atom.Span sm>Register</Atom.Span>
            </Molecule.Link>
            <Molecule.Link to="/auth/reset">
              <Atom.Span sm>Reset Password</Atom.Span>
            </Molecule.Link>
          </Atom.Flex>
        </Atom.Box>
      )}
    </Mutation>
  );
};

FormAuthLogin.defaultProps = {
  label: 'Login',
};

FormAuthLogin.propTypes = {
  styled: PropTypes.object,
};

export default FormAuthLogin;
