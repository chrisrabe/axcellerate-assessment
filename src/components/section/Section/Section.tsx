import React, { type ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  children: React.ReactNode;
}

const isFragment = (child: React.ReactNode) => {
  return React.isValidElement(child) && child.type === React.Fragment;
};

/**
 * Displays all children vertically
 */
const Section: React.FC<SectionProps> = ({ children }) => {
  // This extracts children from fragment elements
  const validChildren = [children]
    .flat()
    .filter(React.isValidElement)
    .flatMap((child) =>
      isFragment(child)
        ? (child.props as { children: ReactNode[] }).children
        : child,
    );

  return (
    <div className="section-container">
      {React.Children.map(validChildren, (child, index) => (
        <div
          className="section-item"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Section;
