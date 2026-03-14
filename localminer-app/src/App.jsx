import { useState, useEffect } from "react"
import RecordForm from "./components/RecordForm"
import RecordList from "./components/RecordList"

function App(){

  // main records state
  const [records,setRecords] = useState([])

  // store id of record being edited
  const [editId,setEditId] = useState(null)

  // load records from localStorage
  useEffect(()=>{
    const data = localStorage.getItem("records")
    if(data){
      setRecords(JSON.parse(data))
    }
  },[])

  // save records to localStorage whenever records change
  useEffect(()=>{
    localStorage.setItem("records",JSON.stringify(records))
  },[records])

  function addRecord(record){
    setRecords([...records,{...record,id:Date.now()}])
  }

  function deleteRecord(id){
    setRecords(records.filter(r=>r.id!==id))
  }

  function startEdit(id){
    setEditId(id)
  }

  function updateRecord(updated){
    const newRecords = records.map(r=>{
      if(r.id===updated.id){
        return updated
      }else{
        return r
      }
    })

    setRecords(newRecords)
    setEditId(null)
  }

  const editingRecord = records.find(r=>r.id===editId)

  return(
    <div className="container">

      <h1>LocalBox Miner</h1>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editingRecord={editingRecord}
      />

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
      />

      <div className="summary">
        <p>Total Records: {records.length}</p>
      </div>

    </div>
  )
}

export default App