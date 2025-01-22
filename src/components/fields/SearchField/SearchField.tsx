import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import type React from "react";
import type { ChangeEvent } from "react";
import "@fontsource/roboto/400.css";
import "./SearchField.css";

interface SearchFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ value, onChange }) => {
  return (
    <div className="search-field-container">
      <MagnifyingGlassIcon className="search-field-icon" />
      <input
        type="text"
        aria-label="search"
        className="search-field-input"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchField;
