import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'
import useFetch from './useFetch';

afterEach(cleanup); 


const getControlledPromise =() =>{
    let defered;

    const promise= new Promise((resolve, reject)=>{
    defered ={resolve, reject}
    })

    return {defered, promise}
}



test('should call api from given url', async() => {
 
    global.fetch = jest.fn();
  await  act(async ()=> renderHook(()=>useFetch('https://reqres.in/api/users?page=2', {})))

    expect(global.fetch).toBeCalledTimes(1)


  })

  
  
  test('test loading state', async () => {

 const {defered, promise}  = getControlledPromise()

 global.fetch = jest.fn(()=> promise)

const {result, waitForNextUpdate}= renderHook(useFetch)
expect(result.current.loading).toBe(true)
defered.resolve()
await waitForNextUpdate()
expect(result.current.loading).toBe(false)
})


test('test data state', async() => {
    const {defered, promise}  = getControlledPromise()

    global.fetch = jest.fn(()=> promise)
   
   const {result, waitForNextUpdate}= renderHook(useFetch)
   defered.resolve({
    json:()=>({
            name:"anil"
         }  
    )
   })
   await waitForNextUpdate()
expect(result.current.data).toStrictEqual({name:"anil"})


})

test('test error state', async () => {
global.fetch = jest.fn(()=>{
    return new Promise(()=>{
        const errorObj ={
            error:true
        }
        throw errorObj
    })
})
   
   const {result, waitForNextUpdate}= renderHook(useFetch)
   await waitForNextUpdate()
expect(result.current.error).toStrictEqual({error:true})
})
