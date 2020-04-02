/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

/* --- Style --- */
const style = {
  display: "flex"
};
/* --- Checkbox : Field : Component --- */
export const Checkbox = ({
  // Checkbox : Field
  name,
  label,
  // React Hook Forms
  error,
  errors,
  register,
  validation,
  children,
  // Theme UI
  sx,
  ...props
}) => {
  return !register ? (
    <span>Form Error</span>
  ) : (
    <div sx={{ ...style, ...props.sxWrapper }}>
      <Styled.div
        as={"input"}
        type="checkbox"
        name={name || "default"}
        label={props.label}
        ref={register({ ...validation })}
        sx={{
          mr: 2,
          ...sx
        }}
      />
      <label for={name}>{label}</label>
    </div>
  );
};
