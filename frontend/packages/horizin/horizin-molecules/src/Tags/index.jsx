/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import ReactTags from "react-tag-autocomplete";

/* --- Style --- */

/* --- Tags : Field : Component --- */
export const Tags = ({
  // Tags : Field
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
  const [tags, setTags] = React.useState(props.tags);
  const [suggestions, setSuggestions] = React.useState(props.suggestions);

  return !register ? (
    <span>Form Error</span>
  ) : (
    <div sx={{ ...props.sxWrapper }}>
      <ReactTags tags={tags} suggestions={suggestions} sx={sx} />
      {/* <label for={name}>{label}</label> */}
    </div>
  );
};
