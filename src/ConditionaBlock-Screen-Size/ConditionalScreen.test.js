import React from 'react';
import { render, fireEvent, cleanup, wait} from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import ConditionalScreenBlock from './CondtionalScreen';
afterEach(cleanup); 

test('renders component correctly', () => {
  const { container} = render(<ConditionalScreenBlock />);
     expect(container).toBeInTheDocument()
     

});


test('renders component correctly for small screen', () => {
    let width = global.window.innerWidth;
    let outerWidth = global.window.outerWidth;
    global.window.innerWidth = 400;
    global.window.outerWidth = 400;
    const {getByTestId} = render(<ConditionalScreenBlock />);
    expect(getByTestId("comp2")).toBeInTheDocument()
    global.window.innerWidth = width;
    global.window.outerWidth = outerWidth;
    
  });