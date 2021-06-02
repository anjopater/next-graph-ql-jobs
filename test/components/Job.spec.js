import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Job from "../../components/Job";

describe("Job", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      job: {
        isFeatured: true,
        company: { logoUrl: "" },
        title: "A great job",
        cities: [
          {
            name: "Tailin",
            country: {
              isoCode: "0128",
            },
          },
        ],
        remotes: [
          {
            type: "Remote",
          },
        ],
        tags: [{ name: "TypScript" }],
      },
    };
  });

  test("should render title, cities", () => {
    render(<Job {...expectedProps} />);
    const title = screen.getByText(expectedProps.job.title);
    const cities = screen.getByText(expectedProps.job.cities[0].name);

     expect(title).toBeVisible();
     expect(cities).toBeVisible();
  });

  test("should render remotes", () => {
    expectedProps.cities = [];
    render(<Job {...expectedProps} />);

    const remotes = screen.getByText(', '+expectedProps.job.remotes[0].type);

    expect(remotes).toBeVisible();
  });
});
