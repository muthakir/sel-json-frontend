import Upload from "../components/upload"
import Map from "./map"
import { useState } from "react"

const UplaodCard = ({ file, setFile, columns, setColumns, rawMonitors, setRawMonitors }) => {




    return (

     
            <Upload
                onFileChange={setFile}
                onColumnsChange={setColumns}
                file={file}
                columns={columns}
                rawMonitors={rawMonitors}
                setRawMonitors={setRawMonitors}
            />

    )
}

export default UplaodCard 