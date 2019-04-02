function menuComputador(inicio, logo, lugarNE, lugarAA, lugarRC, lugarPE, lugarC) {
    return `
    <div id="menu">
        <div style="display: flex">
            <div class="logo" style="padding-left: 10px">
                <img src="${logo}" width="60" alt="Hydroair SAS">
            </div>

            <div style="padding: 15px">
                <a class="tituloMenu" href="${inicio}">Hydroair SAS</a>
            </div>
        </div>

        <div class="botonCelular" style="justify-content: rigth; display: none">
            <img src="assets/images/boton.png" width="40">
        </div>

        <div class="botones">
            <a class="buttons" href="${lugarNE}">Nuestra empresa</a>
            <a class="buttons" href="${lugarAA}">Aires acondicionados</a>
            <a class="buttons" href="${lugarRC}">Redes y comunicaciones</a>
            <a class="buttons" href="${lugarPE}">Plantas eléctricas</a>
            <a class="buttonsC" href="${lugarC}">Contactenos</a>
        </div>
    </div>
    `
}

function insertarMenu(inicio, logo, lugarNE, lugarAA, lugarRC, lugarPE, lugarC) {
    const menu = document.getElementById('menu')

    menu.innerHTML = menuComputador(inicio, logo, lugarNE, lugarAA, lugarRC, lugarPE, lugarC)
}

{/* <div style="margin: 10px 0 20px 0;">
<a href="${lugarNE}" class="botonesMenu">Nuestra Empresa</a>
<a href="${lugarAA}" class="botonesMenu">Aires Acondicionados</a>
<a href="${lugarRC}" class="botonesMenu">Redes y Comunicaciones</a>
<a href="${lugarPE}" class="botonesMenu">Plantas Eléctricas</a>
<a href="${lugarC}" class="botonesMenu">Contactenos</a>

</div> */}