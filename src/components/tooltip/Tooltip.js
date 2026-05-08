import React from "react";

function getText(node) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(getText).join("");
  }
  if (React.isValidElement(node)) {
    return getText(node.props.children);
  }
  return "";
}

export function Tooltip({ children }) {
  return <>{children}</>;
}

export function OverlayTrigger({ children, overlay }) {
  const title = getText(overlay);
  if (!React.isValidElement(children)) {
    return children;
  }

  return React.cloneElement(children, {
    title: title || children.props.title,
  });
}
