import { useEffect, useState } from "react"

export const FileList = () => {
const [files, setFiles] = useState;

useEffect(()=>{
    const fetchFiles = async ()=>{
        const responsive = await fetch(`${import.meta.env.URI_CONNECT}/api/category`)
        const data = await responsive.json();
        setFiles(data)
    };
    fetchFiles();

fetchFiles();
},[files])

  return (
    <>
    <div>FileList</div>
    <div className="filelist">
      {files.map(file =>(
        <div key={file.id} className="filecard">
          <h3>{file.clase}</h3>
          <h3>{file.fuerza}</h3>
          <h3>{file.inteligencia}</h3>
          <h3>{file.habilidades}</h3>
          <h3>{file.fuerza}</h3>
          <h3>{file.category}</h3>
          <img src={`${import.meta.env.VITE_URL_BASE}/${file.fileName}`} alt={file.name} width="200"/>
          <Link to={`editar/${id}`}>editar</Link>
          <Link to={`eliminar/${id}`}>eliminar</Link>
           </div>
      ))}
    </div>
    </>
  )
}
