import React, { useEffect, useState } from 'react'

import './Table.css'

const Table = (props) => {
    const { data } = props;
    const [crwlData, setCrwlData] = useState();

    useEffect(() => {
        setCrwlData(data)
    },[data])

    return (
        <div className='table-container'>
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
    </thead>
    <tbody>
       {crwlData?.headings?.h1?.map((v, i) => (
        <tr>
            <td>H1</td>
            <td>{v}</td>
        </tr>
         ))}
    </tbody>
</table>
        </div>
    );
}

export default Table;