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

        {crwlData?.metatags?.meta ?
         <table className="styled-table"> 
            <thead>
            <tr>
                <th>Title</th> 
                <th>Description</th>
            </tr>
            </thead>
            <tbody> 
                <tr>
                    <td>{crwlData?.metatags?.meta?.title}</td>
                    <td>{crwlData?.metatags?.meta?.description}</td>
                </tr> 
            </tbody>
        </table> : null}  

        {crwlData?.headings?.h1?.length > 0 ?
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
        </table> : null}

        {crwlData?.headings?.h2?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.headings?.h2?.map((v, i) => (
                <tr>
                    <td>H2</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}

        {crwlData?.headings?.h3?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.headings?.h3?.map((v, i) => (
                <tr>
                    <td>H3</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}

        {crwlData?.headings?.h4?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.headings?.h4?.map((v, i) => (
                <tr>
                    <td>H4</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}

        {crwlData?.headings?.h5?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.headings?.h5?.map((v, i) => (
                <tr>
                    <td>H5</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}
        
        {crwlData?.headings?.h6?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.headings?.h6?.map((v, i) => (
                <tr>
                    <td>H6</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}

        {crwlData?.paragraphs?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.paragraphs?.map((v, i) => (
                <tr>
                    <td>Paragraph</td>
                    <td>{v}</td>
                </tr>
                ))}
            </tbody>
        </table> : null}

        {crwlData?.anchors?.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th> 
                <th>Href</th> 
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.anchors?.map((v, i) => (
                <tr>
                    <td>Anchor</td>
                    <td>{v.href}</td>
                    <td>{v.text}</td>
                </tr>
                ))}
            </tbody>
        </table>
        : null}

        {crwlData?.metatags?.images.length > 0 ?
        <table className="styled-table">
            <thead>
            <tr>
                <th>Tag</th>  
                <th>Url</th>
            </tr>
            </thead>
            <tbody>
            {crwlData?.metatags?.images?.map((v, i) => (
                <tr>
                    <td>Image</td> 
                    <td>{v.url}</td>
                </tr>
                ))}
            </tbody>
        </table>
        : null}

        </div>
    );
}

export default Table;