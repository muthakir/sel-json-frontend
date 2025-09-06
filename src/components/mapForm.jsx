import Map from "./map"


function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] === null | obj[key] == " ")
            return false;
    }
    return true;
}
function convertMonitorsToDT(monitor, map) {
    let dtMoniotr = {};
    for (const key of Object.keys(map)) {
        dtMoniotr[key] = monitor[map[key]]
    }
    return dtMoniotr
}
const MapForm = ({ map, columns, setMap, rawMonitors }) => {
    // TODO: check frequency, and tags types 
    // TODO: Handle errors. 
    // TODO: check the script. 
    // TODO: send API request to convert the monitors to the json format
    const handleOnClick = () => {
        if (checkProperties(map)) {
            const MapedDTMonitors = rawMonitors.map((rawMonitor) => {
                return convertMonitorsToDT(rawMonitor, map)
            })
            console.log(MapedDTMonitors)
        }
    }

    return (
        <div className="flex flex-col w-full items-center">
            <Map currentMap={map} columns={columns} setMap={setMap} />

            <button onClick={handleOnClick} >
                Convert
            </button>
        </div>
    )
}

export default MapForm