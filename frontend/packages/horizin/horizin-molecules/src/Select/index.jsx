/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

/* --- Style --- */
const style = {
  display: "flex"
};
/* --- Select : Field : Component --- */
export const Select = ({
  // Select : Field
  name,
  label,
  // React Hook Forms
  error,
  errors,
  register,
  validation,
  // Theme UI
  sx,
  ...props
}) => {
  return !register ? null : (
    <div sx={{ ...style, ...props.sxWrapper }}>
      <Styled.select
        name={name || "default"}
        as={"select"}
        ref={register({ ...validation })}
        label={props.label}
        type={props.type}
        sx={{
          mr: 2,
          ...sx
        }}
      />
      <label for={name}>{label}</label>
    </div>
  );
};
