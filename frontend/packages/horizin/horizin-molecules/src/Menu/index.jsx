/* eslint-disable react-hooks/exhaustive-deps */
/* --- Global Dependencies --- */
import React, { useState, useEffect } from "react";
import { Match } from "@reach/router";

/* --- Local Dependencies --- */
import { Flex, Span, HorizontalRule, Heading } from "@horizin/atoms";
import { Link } from "../Link";

/* --- Module --- */
import { activateMenu } from "./helpers";
const MenuItem = ({ children, label, to, icon, vertical, ...props }) => {
  const [isOpen, setOpen] = useState(props.expanded);
  const [sxChild, setStyleChild] = useState({ ...props.sxChild });
  const [sxImageWrapper] = useState({
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    mr: 1,
    height: 25,
    width: 25
  });
  const [sxImageWrapperChild] = useState({
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    width: 28
  });

  useEffect(() => {
    if (props.direction)
      if (props.direction === "column")
        setStyleChild({
          ...sxChild,
          ml: 2,
          my: 1
        });
  }, [props.direction]);

  return (
    <Flex sx={props.sx} flexDirection={props.flexDirection || "row"}>
      <Flex
        alignCenter
        between
        sx={{
          // alignContent: 'center',
          flex: 1,
          width: "100%",
          ...props.styledWrapper
        }}
        active={props.styledWrapperActive}
      >
        {props.image && (
          <Flex center column sx={{ ...sxImageWrapper }}>
            {props.image}
          </Flex>
        )}

        <Flex alignCenter between sx={{ width: "100%" }}>
          <WrapperLink
            to={to}
            sx={{
              ...props.styledItemDefaults,
              ...props.sx,
              // pb: 2,
              opacity: 0.8,
              borderBottom: "2px solid",
              borderBottomColor: "transparent",
              outline: "none",
              "&:hover": props.hover
            }}
            active={props.active}
            getProps={activateMenu}
          >
            <Span {...props.styledLabel}>{label}</Span>
          </WrapperLink>

          {children /* Menu Item Children Toggle */ && (
            <span onClick={() => setOpen(!isOpen)}>
              <Span
                sx={{ fontSize: 0, cursor: "pointer" }}
                p={2}
                width={30}
                ml="auto"
              >
                <Span
                  xxs
                  opacity={0.3}
                  transform={isOpen ? "rotate(90deg)" : ""}
                >
                  {isOpen ? "▶" : "▶"}
                </Span>
              </Span>
            </span>
          )}
        </Flex>
      </Flex>

      {isOpen && children && (
        <Flex sx={props.sxChildren}>
          {children.map((c, index) => (
            <Flex column key={index} sx={sxChild}>
              <WrapperLink
                to={c.to}
                className="child"
                sx={{
                  ...props.styled,
                  opacity: 0.8,
                  "&.active": {
                    opacity: 1
                  }
                }}
              >
                <Flex alignCenter between px={2}>
                  <Span xs>{c.label}</Span>
                  <Span sx={{ ...sxImageWrapperChild }}>
                    {c.image && c.image}
                  </Span>
                </Flex>
              </WrapperLink>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

MenuItem.defaultProps = {
  expanded: false,
  styledItemDefaults: {
    fontSize: 2,
    // mx: 1,
    opacity: 0.8
  },
  styledItemDefaultsActive: {
    opacity: 1
  },
  styledWrapper: {}
};

/* ------- Component ------- */
export const Menu = ({
  items,
  direction,
  label,
  sxLabel,
  sxMenu,
  labelUnderline,
  ...props
}) => (
  <>
    <LabelMenu label={label} sx={sxLabel} labelUnderline={labelUnderline} />
    <Flex
      sx={{
        ...sxMenu,
        flexDirection: direction || "row"
      }}
    >
      {Array.isArray(items) &&
        items.length > 0 &&
        items.map((item, index) => (
          <MenuItem
            expanded={props.expanded}
            key={index}
            sx={{
              flexDirection: props.direction || "row"
            }}
            {...item}
            {...props}
          />
        ))}
    </Flex>
  </>
);

const LabelMenu = ({ sx, labelUnderline, ...props }) => {
  return props.label ? (
    <>
      <Heading as="h5" sm m0 sx={sx}>
        {props.label}
      </Heading>
      {labelUnderline && <HorizontalRule sx={{ my: 1 }} />}
    </>
  ) : null;
};

const WrapperLink = ({ sx, to, children, ...props }) => (
  <Match path={`${to}`}>
    {props => (
      <Link to={to} className={props.match ? "active" : "inactive"} sx={sx}>
        {children}
      </Link>
    )}
  </Match>
);
