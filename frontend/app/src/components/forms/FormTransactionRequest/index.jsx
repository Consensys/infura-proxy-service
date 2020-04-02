/**
 * @name FormTransactionRequest
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {PropTypes} from 'prop-types';
import {useForm} from 'react-hook-form';

import {fetchTransaction} from '@fetching';
/* --- Component --- */
const FormTransactionRequest = ({horizontal, sx, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      fetchTransaction(values.hash);
    }
  };

  return horizontal ? (
    <Atom.Box as="form" onSubmit={handleSubmit(onSubmit)} sx={sx}>
      <Molecule.Field
        name="hash"
        placeholder="Transaction Hash"
        register={register}
        errors={errors}
        sx={{m: 0, height: '100%'}}
        sxWrapper={{flex: 5}}
      />
      <Atom.Button bg="orange" color="white" sx={{flex: 1, width: '100%'}}>
        <Atom.Span>Request</Atom.Span>
      </Atom.Button>
    </Atom.Box>
  ) : (
    <Atom.Box as="form" onSubmit={handleSubmit(onSubmit)} sx={sx}>
      <Molecule.Field
        name="hash"
        placeholder="Transaction Hash"
        register={register}
        errors={errors}
        sx={{}}
      />
      <Atom.Button bg="orange" color="white" sx={{mt: 2, width: '100%'}}>
        <Atom.Span>Request Transaction Data</Atom.Span>
      </Atom.Button>
    </Atom.Box>
  );
};

FormTransactionRequest.defaultProps = {
  sx: {},
};

FormTransactionRequest.propTypes = {
  styled: PropTypes.object,
};

export default FormTransactionRequest;
