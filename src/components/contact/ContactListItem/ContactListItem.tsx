import type React from "react";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import "./ContactListItem.css";

interface ContactListItemProps {
  imageUrl: string;
  name: string;
  email?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  imageUrl,
  name,
  email,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={[
        "contact-list-item-container",
        isSelected ? "selected" : "",
      ].join(" ")}
    >
      <img
        src={imageUrl}
        alt={`${name} avatar`}
        className="contact-list-item-avatar"
      />
      <div className="contact-list-item-info">
        <span
          className={[
            "contact-list-item-info-name",
            isSelected && !email ? "selected" : "",
          ].join(" ")}
        >
          {name}
        </span>
        {email && <span className="contact-list-item-info-email">{email}</span>}
      </div>
    </div>
  );
};

export default ContactListItem;
