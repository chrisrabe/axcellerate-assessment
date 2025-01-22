import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import type React from "react";
import type { ChangeEvent } from "react";
import "@fontsource/roboto";
import "./SearchField.css";

interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="search-field-container">
      <MagnifyingGlassIcon className="search-field-icon" />
      <input
        type="text"
        className="search-field-input"
        placeholder={placeholder ?? "Search"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchField;
