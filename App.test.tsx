import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./src/client/App";

test('renders the ViewStructure component', () => {
  render(<App />);
  const viewStructureElement = screen.getByTestId('view-structure');
  expect(viewStructureElement).toBeInTheDocument();
});

test('renders the ViewNamespace component', () => {
  render(<App />);
  const viewNamespaceElement = screen.getByTestId('view-namespace');
  expect(viewNamespaceElement).toBeInTheDocument();
});

test('renders the ViewCluster component', () => {
  render(<App />);
  const viewClusterElement = screen.getByTestId('view-cluster');
  expect(viewClusterElement).toBeInTheDocument();
});


// // describe('Unit testing React components', () => {
// //   describe('LabeledText', () => {
// //     let text;
// //     const props = {
// //       label: 'Mega',
// //       text: 'Markets',
// //     };

// //     beforeAll(() => {
// //       text = render(<LabeledText {...props} />);
// //     });

// //     test('Renders the passed-in text with the label in bold', () => {
// //       expect(text.getByText('Mega:').nextSibling).toHaveTextContent('Markets');
// //       expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold');
// //     });
// //   });
// // });