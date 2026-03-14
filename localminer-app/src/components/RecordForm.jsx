import { useState, useEffect } from "react"

function RecordForm({addRecord,updateRecord,editingRecord}){

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")

  useEffect(()=>{
    if(editingRecord){
      setName(editingRecord.name)
      setEmail(editingRecord.email)
    }
  },[editingRecord])

  function handleSubmit(e){
    e.preventDefault()

    if(name==="" || email===""){
      return
    }

    if(editingRecord){
      updateRecord({
        id:editingRecord.id,
        name,
        email
      })
    }else{
      addRecord({name,email})
    }

    setName("")
    setEmail("")
  }

  return(
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button className="addBtn">
        {editingRecord ? "Update" : "Add"}
      </button>

    </form>
  )
}

export default RecordForm