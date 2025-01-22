import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  it("renders children inside a fragment as section item", async () => {
    const { container } = render(
      <Section>
        <>
          <div>Item 1</div>
          <div>Item 2</div>
        </>
      </Section>,
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    const sectionItems = container.querySelectorAll(".section-item");
    expect(sectionItems).toHaveLength(2);
  });
});
