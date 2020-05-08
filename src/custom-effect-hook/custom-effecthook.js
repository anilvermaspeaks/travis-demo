import React from 'react';
import useFetch from './useFetch';

const CustomEffectHook = ()=> {
const {data, error, loading} = useFetch('https://reqres.in/api/users?page=2', {})

console.log(data)
    return (
        <div>
            
        </div>
    )
}


export default  CustomEffectHook;