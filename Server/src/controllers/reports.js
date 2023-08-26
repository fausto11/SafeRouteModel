import { connect } from "../database"


export const getReports=async(req,res)=>{
    const connection=await connect()
    const [rows]=await connection.query("SELECT * FROM reports")
    res.json(rows)
}

export const getReport=async(req,res)=>{
    const connection=await connect()
    const [rows]=await connection.query("SELECT * FROM reports WHERE id =?",[req.params.id])
    res.json(rows[0])
}
export const getReportsCount=async(req,res)=>{
    const connection=await connect()
    const [rows]=await connection.query("SELECT COUNT(*) FROM reports")
    res.json(rows[0]["COUNT(*)"])    
}

export const saveReport= async(req,res)=>{
    const connection=await connect()
    const [results]=await connection.query("INSERT INTO reports(parroquia,distrito,circuito,categoria,latitud,longitud) VALUES(?,?,?,?,?,?)",
    [
        req.body.parroquia,
        req.body.distrito,
        req.body.circuito,
        req.body.categoria,
        req.body.latitud,
        req.body.longitud
    ])
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const deleteReport=async(req,res)=>{
    const connection=await connect()
    const result= await connection.query("DELETE FROM reports WHERE id=?",[
        req.params.id
    ])
    res.sendStatus(204);
}
export const updateReport=async(req,res)=>{
    const connection = await connect()
     await connection.query("UPDATE reports SET ? WHERE id=?",[
       req.body,
       req.params.id 
    ])
    res.sendStatus(204);
}