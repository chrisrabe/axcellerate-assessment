import { ChevronRightIcon } from "@heroicons/react/24/solid";
import type React from "react";
import "@fontsource/roboto/500.css";
import "./SectionHeader.css";

interface SectionHeaderProps {
  headerText: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  headerText,
  isExpanded,
  onClick,
}) => {
  return (
    <div className="section-header-container" onClick={onClick}>
      <span className="section-header-text">{headerText}</span>
      <ChevronRightIcon
        className={["section-header-icon", isExpanded ? "expanded" : ""].join(
          " ",
        )}
      />
    </div>
  );
};

export default SectionHeader;
