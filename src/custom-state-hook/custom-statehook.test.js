import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './useCounter';

afterEach(cleanup); 

test('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
        result.current.increment()
    })
  
    expect(result.current.count).toBe(1)
  })


  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter())
  
    act(() => {
        result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })


  
  