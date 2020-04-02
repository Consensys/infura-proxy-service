/**
 * @name FormEmailSubscription
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {useState} from 'react';
import {PropTypes} from 'prop-types';
import {useForm} from 'react-hook-form';

/* --- FormEmailSubscription : Form --- */
const FormEmailSubscription = ({sx, label, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      setComplete(true); // TODO @kamescg Validate submission and add storage mutation
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="name"
        placeholder="Name"
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="email"
        type="email"
        placeholder="Email"
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Atom.Button bg="blue" color="white" sx={{mt: 3, width: '100%'}}>
        {isComplete ? (
          <Atom.Span>Complete!</Atom.Span>
        ) : (
          <Atom.Span>{label}</Atom.Span>
        )}
      </Atom.Button>
    </form>
  );
};

FormEmailSubscription.defaultProps = {
  label: 'Submit',
  sx: {},
};

FormEmailSubscription.propTypes = {
  sx: PropTypes.object,
};

export default FormEmailSubscription;
