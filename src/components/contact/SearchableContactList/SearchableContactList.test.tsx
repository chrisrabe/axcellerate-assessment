import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchableContactList from ".";
import {
  absentContacts,
  allContacts,
  attendedContacts,
} from "../../../mocks/mockContacts";
import { type Contact, ContactStatus } from "../../../types/Contact";

describe("SearchableContactList", () => {
  it("renders contacts under attended and absent sections", () => {
    render(<SearchableContactList contacts={allContacts} />);

    // Verify headers are present
    const attendedHeader = screen.getByText("Attended");
    expect(attendedHeader).toBeInTheDocument();

    const absentHeader = screen.getByText("Absent");
    expect(absentHeader).toBeInTheDocument();

    // Check that all attended names are under attended section
    const expectedAttendedNames = allContacts
      .filter((contact) => contact.status === ContactStatus.Attended)
      .map((contact) => contact.name);

    const attendedSection = attendedHeader.closest("section");
    for (const name of expectedAttendedNames) {
      expect(within(attendedSection!).getByText(name)).toBeInTheDocument();
    }

    // Check that all absent names are under the absent section
    const expectedAbsentNames = allContacts
      .filter((contact) => contact.status === ContactStatus.Absent)
      .map((contact) => contact.name);

    const absentSection = absentHeader.closest("section");
    for (const name of expectedAbsentNames) {
      expect(within(absentSection!).getByText(name)).toBeInTheDocument();
    }
  });

  it("renders no contacts message under Absent section if all contacts attended", () => {
    render(<SearchableContactList contacts={attendedContacts} />);

    const absentHeader = screen.getByText("Absent");
    const absentSection = absentHeader.closest("section");
    expect(within(absentSection!).getByText("No contacts")).toBeInTheDocument();
  });

  it("renders no contacts message under Attended section if all contacts are absent", () => {
    render(<SearchableContactList contacts={absentContacts} />);

    const attendedHeader = screen.getByText("Attended");
    const attendedSection = attendedHeader.closest("section");
    expect(
      within(attendedSection!).getByText("No contacts"),
    ).toBeInTheDocument();
  });

  it("hides contacts in the absent section if it is collapsed", async () => {
    render(<SearchableContactList contacts={absentContacts} />);

    const absentHeader = screen.getByText("Absent");

    const absentSection = absentHeader.closest("section");
    for (const contact of absentContacts) {
      expect(
        within(absentSection!).getByText(contact.name),
      ).toBeInTheDocument();
    }

    await userEvent.click(absentHeader);

    // All names hidden after clicking absent header
    for (const contact of absentContacts) {
      expect(
        within(absentSection!).queryByText(contact.name),
      ).not.toBeInTheDocument();
    }
  });

  it("hides contacts in the attended section if it is collapsed", async () => {
    render(<SearchableContactList contacts={attendedContacts} />);

    const attendedHeader = screen.getByText("Attended");

    const attendedSection = attendedHeader.closest("section");
    for (const contact of attendedContacts) {
      expect(
        within(attendedSection!).getByText(contact.name),
      ).toBeInTheDocument();
    }

    await userEvent.click(attendedHeader);

    // All names hidden after clicking absent header
    for (const contact of attendedContacts) {
      expect(
        within(attendedSection!).queryByText(contact.name),
      ).not.toBeInTheDocument();
    }
  });

  it("filters all attendees that match the search query", async () => {
    render(<SearchableContactList contacts={allContacts} />);

    const partialName = "Co";

    const searchInput = screen.getByRole("textbox", { name: /search/i });
    expect(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, partialName);

    const expectedContacts: Contact[] = [];
    const notExpectedContacts: Contact[] = [];

    for (const contact of allContacts) {
      if (contact.name.toLowerCase().includes(partialName.toLowerCase())) {
        expectedContacts.push(contact);
      } else {
        notExpectedContacts.push(contact);
      }
    }

    for (const contact of expectedContacts) {
      expect(screen.getByText(contact.name)).toBeInTheDocument();
    }

    for (const contact of notExpectedContacts) {
      expect(screen.queryByText(contact.name)).not.toBeInTheDocument();
    }
  });

  it("renders email address of all contacts if using email variant", async () => {
    render(<SearchableContactList contacts={allContacts} variant="email" />);

    const expectedEmails = allContacts.map((contact) => contact.email);

    for (const email of expectedEmails) {
      expect(screen.getByText(email)).toBeInTheDocument();
    }
  });
});
