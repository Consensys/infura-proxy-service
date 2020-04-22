/* --- Global --- */
import React from "react";
import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import axios from "axios";

import { abi, address } from "./sample";

/**
 * @name FormContractRawUpload
 * @description Capture feedback from users.
 * @version 0.0.1
 */

const FormContractRawUpload = ({ horizontal, sx, ...props }) => {
  /* --- Form Hook State --- */
  const { handleSubmit, register } = useForm({
    defaultValues: {
      address: address,
      name: "Token",
      abi: JSON.stringify(abi),
    },
  });

  /* --- Submit Handler --- */
  const onSubmit = (values) => {
    if (values) {
      axios
        .post("http://localhost:3131/contract/raw/", {
          address: values.address,
          name: values.name,
          abi: JSON.parse(values.abi),
          bytecode: values.bytecode,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      className="form-contract-raw-upload"
    >
      <input
        name="name"
        placeholder="Name"
        ref={register({
          required: "Required",
        })}
      />
      <input
        name="address"
        placeholder="Address"
        ref={register({
          required: "Required",
          pattern: {
            value: !/^(0x)?[0-9a-f]{40}$/i,
            message: "invalid email address",
          },
        })}
      />
      <textarea
        name="abi"
        as="textarea"
        placeholder="ABI"
        ref={register({
          required: "Required",
        })}
      />
      <button bg="orange" color="white" sx={{ flex: 1, width: "100%" }}>
        Setup Cache Endpoint
      </button>
    </form>
  );
};

FormContractRawUpload.defaultProps = {
  sx: {},
};

FormContractRawUpload.propTypes = {
  styled: PropTypes.object,
};

export default FormContractRawUpload;
