import React, { useEffect, useRef, useState } from "react";
import "./Reveal.css";

const directions = ["top", "right", "bottom", "left"];

function getDirection(props) {
  return directions.find((direction) => props[direction]) || "bottom";
}

function getTransform(type, direction, distance) {
  if (type === "flip") {
    if (direction === "left") return "perspective(900px) rotateY(-18deg)";
    if (direction === "right") return "perspective(900px) rotateY(18deg)";
    if (direction === "top") return "perspective(900px) rotateX(18deg)";
    return "perspective(900px) rotateX(-18deg)";
  }

  const axis = direction === "left" || direction === "right" ? "X" : "Y";
  const sign = direction === "top" || direction === "left" ? "-" : "";

  return `translate${axis}(${sign}${distance})`;
}

function Reveal({
  children,
  type = "fade",
  duration = 900,
  delay = 0,
  distance = "32px",
  fraction = 0.15,
  triggerOnce = true,
  ...directionProps
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const direction = getDirection(directionProps);
  const className = [
    "reveal-motion",
    `reveal-motion-${type}`,
    isVisible ? "reveal-motion-visible" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const style = {
    "--reveal-duration": `${duration}ms`,
    "--reveal-delay": `${delay}ms`,
    "--reveal-transform": getTransform(type, direction, distance),
  };

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: fraction,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [fraction, triggerOnce]);

  const childArray = React.Children.toArray(children);

  if (childArray.length === 1 && React.isValidElement(childArray[0])) {
    const child = childArray[0];

    if (typeof child.type === "string") {
      return React.cloneElement(child, {
        ref,
        className: [child.props.className, className].filter(Boolean).join(" "),
        style: {
          ...style,
          ...child.props.style,
        },
      });
    }
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export const Fade = Reveal;
export function Flip(props) {
  return <Reveal {...props} type="flip" />;
}
