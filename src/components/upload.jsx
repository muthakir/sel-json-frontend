import Card from "./uploadcard"
import * as XLSX from 'xlsx';
let Upload = ({ onFileChange, onColumnsChange, columns, changeMap, rawMonitors, setRawMonitors }) => {
    const handleFileChange = (event) => {
        const firstByte = Date.now()
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log(( Date.now() - firstByte ) / 1000)
                const binaryString = e.target.result;
                const workbook = XLSX.read(binaryString, { type: 'binary', sheetRows: 10 });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });

                setRawMonitors(jsonData)
                const newColumns = Object.keys(jsonData[0]).sort()
                onFileChange(file)
                onColumnsChange(newColumns)
            };
            reader.readAsArrayBuffer(file);
        }

    }

    return (
            <div className="max-h-1/5 flex content-center justify-center w-1/2 ">
                <button className="flex sm:mr-2 ">
                    <input type="file" onChange={handleFileChange} id="upload" hidden/>
                    <label htmlFor="upload">upload xlsx</label> 
                </button>
            </div>
            
        
    )
}

export default Upload