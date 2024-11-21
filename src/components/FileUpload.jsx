
export const FileUpload = () => {
  const handlerSubmit = async(e)=>{
   
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_BASE}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error en la subida: ${response.statusText}`);
      }
    } catch (error) {
      console.log(error)
      alert('ERROR AL SUBIR')
    }
  }
  return (
    <div>
      <h2>Subir Archivo</h2>
      <form onSubmit={handlerSubmit}>
        <label>
          Clase:
          <input
            type="text"
            placeholder="Clase"
            value={clase}
            onChange={(e) => setClase(e.target.value)}
            required
          />
        </label>

        <label>
          Fuerza:
          <textarea
            placeholder="Fuerza"
            value={fuerza}
            onChange={(e) => setFuerza(e.target.value)}
            required
          />
        </label>

        <label>
          Inteligencia:
          <textarea
            placeholder="Inteligencia"
            value={inteligencia}
            onChange={(e) => setInteligencia(e.target.value)}
            required
          />
        </label>

        <label>
          Habilidades:
          <input
            type="text"
            placeholder="Habilidades"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
            required
          />
        </label>

        <label>
          Categoría:
          <input
            type="text"
            placeholder="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </label>

        <label>
          Archivo:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>

        <button type="submit">Subir</button>
      </form>
    </div>
  );
};
 