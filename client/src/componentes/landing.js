import './landing.css'
function Landing() {
  return (
    <div className="mainDv">
      <div className='formdv'>
        <h2>Formulario</h2>
        <div className="inputFill">
          <input placeholder='Nombre'/>
        </div>
        <div className="inputFill">
          <input placeholder='Apellido'/>
        </div>
        <div className="inputFill">
          <input placeholder='Contraseña'/>
        </div>
        <div className="inputSelect">
          <select className='selectRegion'>
            <option>
              Select Region
            </option>
          </select>
          <select>
            <option>
              Pais
            </option>
          </select>
        </div>
        <div className='buttonsDv'>
          <button className="buttonsSave">Guardar</button>
          <button className='buttonsCancel'>Cancelar</button>
        </div>
      </div>

    </div>
  )
}

export default Landing;
