import React, { useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import Table from '../components/Table/Table';
import useAxios from '../hooks/useAxios';
import { isNull } from 'lodash'
import axios from 'axios';
 
const Home = () => {
   const [data, setData] = useState()
   // const { response, loading, error, fetchData } = useAxios()
   const [body, setBody] = useState();
   const [loading, setLoading] = useState(false);

   const updateValue = (event) => {
     setBody({"Url": event.target.value});

     console.log('event', event.target.value)
   }

   const handleSubmit = () => {
      setLoading(true);
      axios.post('http://localhost:4000/api/crawler', body).then((res) => {
         setLoading(false);
         setData(res.data);
      });
   }

   // useEffect(() => {
      
   // }, [data])


   return (
      <>
        <Input handleSubmit={handleSubmit} onChange={updateValue}/>

        {loading && <span>Loading...</span> }

         {isNull(data)}{
            <Table data={data}/>
         }
       
      </>
   )
}

export default Home;