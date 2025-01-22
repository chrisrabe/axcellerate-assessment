import type React from "react";
import { useState } from "react";
import type { Contact } from "../../../types/Contact";
import Section from "../../section/Section";
import SectionHeader from "../../section/SectionHeader";
import ContactListItem from "../ContactListItem";
import "@fontsource/roboto/400.css";
import "./ContactList.css";

interface ContactListProps {
  headerText: string;
  contacts: Contact[];
  variant: "standard" | "email";
  setSelectedContact?: (contact: Contact) => void;
  selectedContact?: Contact;
}

/**
 * Displays list of contacts vertically in a collapsible list
 */
const ContactList: React.FC<ContactListProps> = ({
  headerText,
  contacts,
  variant,
  setSelectedContact,
  selectedContact,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="contact-list-container">
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
              onClick={
                setSelectedContact
                  ? () => setSelectedContact(contact)
                  : undefined
              }
              isSelected={contact.name === selectedContact?.name}
            />
          ))}
        </Section>
      )}
      {isExpanded && contacts.length === 0 && (
        <div className="no-contacts-info">No contacts</div>
      )}
    </section>
  );
};

export default ContactList;
