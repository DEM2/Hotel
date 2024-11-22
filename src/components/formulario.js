import React from "react";
import "../formulario.css"

const Formulario = ()=>{
    return(
        <form id="reserva-form">
        <label htmlFor="tipo_habitacion">Tipo de habitación:</label>
        <select id="tipo_habitacion" name="tipo_habitacion">
            <option value="Ordinaria">Ordinaria</option>
            <option value="Compartida">Compartida</option>
        </select>

        <label htmlFor="tipo_cama">Tipo de cama:</label>
        <select id="tipo_cama" name="tipo_cama">
            <option value="Sencilla">Sencilla</option>
            <option value="Doble King">Doble</option>
        </select>

        <label htmlFor="nombre_cliente">Nombre:</label>
        <input type="text" id="nombre_cliente" name="nombre_cliente" required/>

        <label htmlFor="apellido_cliente">Apellido:</label>
        <input type="text" id="apellido_cliente" name="apellido_cliente" required/>

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="text" id="correo" name="correo" required/>


        <label htmlFor="direccion_cliente">Dirección:</label>
        <input type="text" id="direccion_cliente" name="direccion_cliente" required/>

        <label htmlFor="fecha_inicio">Fecha de inicio:</label>
        <input type="datetime-local" id="fecha_inicio" name="fecha_inicio" required/>

        <label htmlFor="fecha_fin">Fecha de fin:</label>
        <input type="datetime-local" id="fecha_fin" name="fecha_fin" required/>

        <label htmlFor="metodo_pago">Método de pago:</label>
        <select id="metodo_pago" name="metodo_pago">
            <option value="Debito">Tarjeta de débito</option>
            <option value="Credito">Tarjeta de crédito</option>
        </select>

        <label htmlFor="cuotas">Número de cuotas:</label>
        <input type="number" id="cuotas" name="cuotas" min="1" step="1" disabled/>

        <label htmlFor="numero_tarjeta">Número de tarjeta:</label>
        <input type="text" id="numero_tarjeta" name="numero_tarjeta" required/>

        <label htmlFor="restaurante">Restaurante:</label>
        <input type="checkbox" id="restaurante" name="restaurante"/>

        <label htmlFor="transporte">Transporte:</label>
        <input type="checkbox" id="transporte" name="transporte"/>

        <label htmlFor="parqueadero">Parqueadero:</label>
        <input type="checkbox" id="parqueadero" name="parqueadero"/>

        <label htmlFor="lavanderia">Lavandería:</label>
        <input type="checkbox" id="lavanderia" name="lavanderia"/>

        <label htmlFor="guia">Guía turístico:</label>
        <input type="checkbox" id="guia" name="guia"/>

        <input type="submit" value="Reservar"/>
    </form>
    )
    
}
export default Formulario;