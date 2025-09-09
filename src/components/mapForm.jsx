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
        if (key == 'locations'){
            dtMoniotr[key] = monitor[map[key]].split(',');
        }
        else{
            dtMoniotr[key] = monitor[map[key]]
        }
        
    }
    dtMoniotr['tags'] = [];
    dtMoniotr["manuallyAssignedApps"] = []; 

    return dtMoniotr
}
const MapForm = ({ map, columns, setMap, rawMonitors, setConverted }) => {
    // TODO: check frequency, and tags types 
    // TODO: Handle errors. 
    // TODO: check the script. 
    // TODO: send API request to convert the monitors to the json format
    const handleOnClick = () => {
        console.log(rawMonitors)
        if (checkProperties(map)) {
            
            const MapedDTMonitors = rawMonitors.map((rawMonitor) => {
                return convertMonitorsToDT(rawMonitor, map)
            })
            console.log(MapedDTMonitors)
            fetch("http://127.0.0.1:8000/catchpoint/collection/json", 
            {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({monitors: MapedDTMonitors})
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                setConverted(data)
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
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