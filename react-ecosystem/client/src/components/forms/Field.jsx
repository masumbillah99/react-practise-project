import React from "react";

const Field = ({ label, htmlFor, children, error }) => {
  const id = htmlFor || getChildId(children);

  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
      )}
      {children}
      {!!error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default Field;

/** get child id for set in htmlFor */
const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child) {
    return child.props.id;
  }
};
