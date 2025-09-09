import { DataTableV2 } from '@dynatrace/strato-components-preview/tables';
import { useMemo } from 'react';

const Table = ({ data }) => {
    if (data.length > 0) {
        console.log(data)
        const columns = useMemo(() => {
            const cls = Object.keys(data[0]).map((key) => {
                console.log(key)
                return {
                    header: key,
                    accessor: key,
                    id: key,
                }
            })
            console.log(cls)
            return cls
        })
        const subRows = data.map((row)=>{
        
            const events = row['script']['events'].map((event)=>{
                const subRow = {...row}
                subRow['script'] = `${event["type"]} -> ${event['description']}`
                return subRow
            })
            
            return {...row, customSubRows: events}
        })
        console.log(subRows)
        return <DataTableV2 columns={columns} data={subRows}  subRows={{
            accessor: 'customSubRows',
            subRowColumnId: 'script',
          }} 
          fullWidth
          defaultOpenSubRows={{
            '0': true,
            '1': true,
          }}
          lineWrap
        />;
    }
}

export default Table