import RecordRow from "./RecordRow"

function RecordList({records,deleteRecord,startEdit}){

  if(records.length===0){
    return <p>No Records Found</p>
  }

  return(

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {records.map((r)=>(
          <RecordRow
            key={r.id}
            record={r}
            deleteRecord={deleteRecord}
            startEdit={startEdit}
          />
        ))}

      </tbody>

    </table>

  )
}

export default RecordList