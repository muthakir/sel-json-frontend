import MapField from "./mapField"

let Map = ({ columns, currentMap, setMap }) => {
    const fields = currentMap && columns ?
        Object.keys(currentMap).map((fieldName) => {
            return <MapField
                columns={columns}
                fieldName={fieldName}
                key={fieldName}
                map={currentMap}
                setMap={setMap}
            />
        })
        : null
    console.log(fields)
    return <div className="self-center">
        {
            fields
        }
    </div>


}

export default Map