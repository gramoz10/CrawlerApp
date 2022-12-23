import React, { useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import Table from '../components/Table/Table';
import useAxios from '../hooks/useAxios';
import { isNull } from 'lodash'


const Home = () => {
   const [data, setData] = useState()
   const { response, loading, error, fetchData } = useAxios()
   const [body, setBody] = useState();

   const updateValue = (event) => {
    setBody({Url: event.target.value});

     console.log('event', event.target.value)
   }

   const handleSubmit = () => {
      fetchData({
         method: "POST",
         url: "/crawler",
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body
      })

      console.log('body', body)
   }

   useEffect(() => {
      if(response !== null){
         setData(response);
      }
   },[response])

   return (
      <>
        <Input handleSubmit={handleSubmit} onChange={updateValue}/>

        {loading && <span>Loading...</span> }

        {!isNull(data) ? <span>No data...</span> :  <Table data={data}/>} 
      </>
   )
}

export default Home;