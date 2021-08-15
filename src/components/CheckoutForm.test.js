import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
    //Arrange
  const firstNameInput = screen.queryByLabelText(/First Name/);
  const lastNameInput = screen.queryByLabelText(/Last Name/);
  const addressInput = screen.queryByLabelText(/Address/);
  const cityInput = screen.queryByLabelText(/City/);
  const stateInput = screen.queryByLabelText(/State/);
  const zipInput = screen.queryByLabelText(/Zip/);
  const submit = screen.queryByRole("button");
    //Act
  userEvent.type(firstNameInput, "Chevy");
  userEvent.type(lastNameInput, "Jackson");
  userEvent.type(addressInput, "6830 Unicorn lane");
  userEvent.type(cityInput, "Tacoma");
  userEvent.type(stateInput, "WA");
  userEvent.type(zipInput, "98409");
  userEvent.click(submit);

  const success = screen.queryByTestId(/successMessage/);
    //Assert
  expect(success).toBeInTheDocument();
});
