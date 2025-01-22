import type React from "react";
import { useState } from "react";
import { type Contact, ContactStatus } from "../../../types/Contact";
import SearchField from "../../fields/SearchField";
import ContactList from "../ContactList";

export interface SearchableContactListProps {
  /** List of contacts. */
  contacts: Contact[];
  /** Display all contacts' emails by using the email variant. */
  variant?: "standard" | "email";
  setSelectedContact?: (contact: Contact) => void;
  selectedContact?: Contact;
}

/**
 * Component for searching attended and absent contacts.
 */
const SearchableContactList: React.FC<SearchableContactListProps> = ({
  contacts,
  selectedContact,
  setSelectedContact,
  variant = "standard",
}) => {
  const [searchText, setSearchText] = useState<string>("");

  const contactsToDisplay = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div>
      <SearchField
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <ContactList
        headerText="Attended"
        variant={variant}
        contacts={contactsToDisplay.filter(
          (contact) => contact.status === ContactStatus.Attended,
        )}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <ContactList
        headerText="Absent"
        variant={variant}
        contacts={contactsToDisplay.filter(
          (contact) => contact.status === ContactStatus.Absent,
        )}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
    </div>
  );
};

export default SearchableContactList;
