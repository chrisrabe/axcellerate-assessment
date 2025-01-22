import type React from "react";
import { useState } from "react";
import type { Contact } from "../../../types/Contact";
import Section from "../../section/Section";
import SectionHeader from "../../section/SectionHeader";
import ContactListItem from "../ContactListItem";
import "@fontsource/roboto";
import "./ContactList.css";

interface ContactListProps {
  headerText: string;
  contacts: Contact[];
  variant?: "standard" | "email";
  expanded?: boolean;
  setSelectedContact?: (contact: Contact) => void;
  selectedContact?: Contact;
}

const ContactList: React.FC<ContactListProps> = ({
  headerText,
  contacts,
  variant = "standard",
  expanded = true,
  setSelectedContact,
  selectedContact,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className="contact-list-container">
      <SectionHeader
        headerText={headerText}
        isExpanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      />
      {isExpanded && contacts.length > 0 && (
        <Section>
          {contacts.map((contact, idx) => (
            <ContactListItem
              key={`${headerText}-contact-${idx}`}
              imageUrl={contact.avatarUrl}
              name={contact.name}
              email={variant === "email" ? contact.email : undefined}
              onClick={() =>
                setSelectedContact ? setSelectedContact(contact) : undefined
              }
              isSelected={contact.name === selectedContact?.name}
            />
          ))}
        </Section>
      )}
      {isExpanded && contacts.length === 0 && (
        <div className="no-contacts-info">No contacts</div>
      )}
    </div>
  );
};

export default ContactList;
