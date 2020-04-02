/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

/* --- Local --- */
import { Error } from "../Error";

const internalLabel = ["radio", "checkbox"];
/* --- Component --- */
export const Field = ({
  as,
  sx,
  error,
  errors,
  register,
  validation,
  children,
  ...props
}) => {
  return !register ? null : (
    <div sx={{ ...props.sxWrapper }}>
      {!internalLabel.includes(props.type) && props.label && (
        <Styled.div
          as="label"
          sx={{ display: "block", my: 1, ...props.sxLabel }}
        >
          {props.label}
        </Styled.div>
      )}
      <Styled.div
        as={as || input}
        ref={register({ ...validation })}
        label={props.label}
        type={props.type}
        {...props}
        sx={{
          borderColor: "gray",
          borderWidth: 1,
          borderStyle: "solid",
          boxShadow: 0,
          p: 10,
          my: 1,
          width: "100%",
          ...sx
        }}
        children={children}
      />
      {internalLabel.includes(props.type) && props.label && (
        <Styled.div xs as="label" my="5px" sx={{ mt: 3, ...props.sxLabel }}>
          {props.label}
        </Styled.div>
      )}
      {errors[props.name] && errors[props.name].message && (
        <Error floating name={props.name} error={error} className="input-error">
          {errors[props.name].message}
        </Error>
      )}
    </div>
  );
};

Field.defaultProps = {
  as: "input"
};

export default Field;
