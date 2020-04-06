/**
 * @name FormTransactionRequest
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {PropTypes} from 'prop-types';
import {useForm} from 'react-hook-form';
import axios from 'axios';

import {abi, bytecode, address} from './sample';

/* --- Component --- */
const FormTransactionRequest = ({horizontal, sx, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm({
    defaultValues: {
      address: address,
      name: 'Token',
      abi: JSON.stringify(abi),
      // bytecode: bytecode,
    },
  });

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      axios
        .post('http://localhost:3131/contract/raw/', {
          address: values.address,
          name: values.name,
          abi: JSON.parse(values.abi),
          bytecode: values.bytecode,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  return (
    <Atom.Box as="form" onSubmit={handleSubmit(onSubmit)} sx={sx}>
      <Molecule.Field
        name="name"
        placeholder="Name"
        register={register}
        errors={errors}
        sxWrapper={{flex: 1, my: 3}}
      />
      <Molecule.Field
        name="address"
        placeholder="Address"
        register={register}
        errors={errors}
        sxWrapper={{flex: 1, my: 3}}
      />
      <Molecule.Field
        name="abi"
        as="textarea"
        placeholder="ABI"
        register={register}
        errors={errors}
        sx={{m: 0, minHeight: 130}}
        sxWrapper={{flex: 1, my: 3}}
      />
      <Atom.Button bg="orange" color="white" sx={{flex: 1, width: '100%'}}>
        <Atom.Span>Setup Cache Endpoint</Atom.Span>
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
