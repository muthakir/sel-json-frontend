import { useEffect, useState } from "react"
import UplaodCard from "../components/uploadcard"
import MapForm from "../components/mapForm";
let Home = () => {
    // TODO: move state to custome hooks for cleaner code. 

    const [file, setFile] = useState();
    const [columns, setColumns] = useState();
    const [map, setMap] = useState({
        name: null,
        frequancy: null,
        script: null,
        tags: null,
        location: null,
        type: null,
    })
    const [rawMonitors, setRawMonitors] = useState([])

    return (
        <div className="flex flex-col items-center justify-center content-center sm:flex-row w-full min-h-20 items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg outline outline-black/5 ">

            < UplaodCard
                setRawMonitors={setRawMonitors}
                rawMonitors={rawMonitors}
                file={file}
                setFile={setFile}
                map={map} setMap={setMap}
                columns={columns}
                setColumns={setColumns}
                
            />
            <div className="h-full sm:w-px sm:bg-black-500 mx-2"></div>
            <MapForm map={map} setMap={setMap} columns={columns} rawMonitors={rawMonitors}>

            </MapForm>

        </div>




    )

}
export default Home