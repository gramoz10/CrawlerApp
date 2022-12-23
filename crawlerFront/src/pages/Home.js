import React, { useState } from 'react';
 

const Home = (props) => {  
   const [url, setUrl] = useState('url');
 
   const crawledPage = {
      'title':'asd',
      'headings':{
         'h1':[],
         'h2':[],
         'h3':['asd','asd'],
         'h4':['asd','asd'],
         'h5':[],
         'h6':['asd','asd'],
      }
   };

 
   return ( 
    <div> 
      <div>
         <input 
            type="text" 
            name="url" 
            placeholder='Url to crawl' 
            onChange={(e) => setUrl(e.target.value)}/>
         <input type="button"  value="Crawl page" />
      </div>

      <h1>{url}</h1>
       
       {crawledPage != null ? 
       <div>
       {
          crawledPage.headings.h1.length > 0 ?
             <div >
                <h3>H1</h3>
             </div> 
          : null 
       } 
       
       {
          crawledPage.headings.h2.length > 0 ?
             <div >
                <h3>H2</h3>
             </div> 
          : null 
       } 
       
       {
          crawledPage.headings.h3.length > 0 ?
             <div >
                <h3>H3</h3>
             </div> 
          : null 
       } 
       
       {
          crawledPage.headings.h4.length > 0 ?
             <div >
                <h3>H4</h3>
             </div> 
          : null 
       } 
       
       {
          crawledPage.headings.h5.length > 0 ?
             <div >
                <h3>H5</h3>
             </div> 
          : null 
       } 
       
       {
          crawledPage.headings.h6.length > 0 ?
             <div >
                <h3>H6</h3>
             </div> 
          : null 
       }
    </div>
       : null}

      
    </div>
   )
}

export default Home;