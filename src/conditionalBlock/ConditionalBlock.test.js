import React from 'react';
import { render, fireEvent, cleanup, within} from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import ConditionalBlock from './ConditionalBlock';
import Dummy from "./Dummy"


afterEach(cleanup); 

test('renders conditional block component correctly', () => {
  const { container, queryByTestId} = render(<ConditionalBlock />);

     expect(container).toBeInTheDocument()
     expect(queryByTestId('showPara')).toBeNull();

});

test('on button click para should show', () => {
    const {getByTestId, container} = render(<ConditionalBlock />);
    fireEvent.click(getByTestId('show-btn'))
    expect(getByTestId('showPara')).toBeInTheDocument();
  });
  

  
  