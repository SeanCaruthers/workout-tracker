import React from 'react';
import TableHeader from './TableHeader';

function Table({caption, headers, children}){
    return(
            <table>
                <caption>{caption}</caption>
                <TableHeader headers={headers}></TableHeader>
                <tbody>
                     {children}
                </tbody>
            </table>
    )
}

export default Table;