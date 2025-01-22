import type React from "react";
import "@fontsource/roboto";
import "./ContactListItem.css";

interface ContactListItemProps {
  imageUrl: string;
  name: string;
  email?: string;
  isSelected?: boolean;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  imageUrl,
  name,
  email,
  isSelected,
}) => {
  return (
    <div
      className={[
        "contact-list-item-container",
        isSelected ? "contact-list-item-container-selected" : "",
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
            isSelected && !email ? "contact-list-item-info-name-selected" : "",
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
