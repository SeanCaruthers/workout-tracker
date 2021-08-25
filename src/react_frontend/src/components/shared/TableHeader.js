import React from 'react';

function TableHeader({ headers }){
    return(
            <thead>
                <tr>
                    {headers.map((header, i) => <th key={i}>{header}</th>)}
                </tr>
            </thead>
    )
}

export default TableHeader