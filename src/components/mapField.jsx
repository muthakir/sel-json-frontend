import { useState } from "react"

const MapField = ({ fieldName, columns, map, setMap }) => {
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        const new_map = { ...map };
        new_map[fieldName] = event.target.value
        setMap(new_map)
    }
    const [selectedValue, setSelectedValue] = useState();
    return (
        <div className="flex flex-row place-content-between
">
            < label htmlFor={fieldName}className="m-2 w-1/5">
                {fieldName}
            </label>
            <select value={selectedValue} onChange={handleChange} defaultValue={null} id={ fieldName }>
                <option value=" ">

                </option>
                {columns.map((column) => {
                    return <option value={column} key={column}>
                        {column}
                    </option>
                })

                }

            </select>


        </div>
    )
}

export default MapField