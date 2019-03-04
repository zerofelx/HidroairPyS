function menuComputador(lugarNE, lugarAA, lugarRC, lugarPE, lugarC) {
    return `
        <div style="margin: 10px 0 20px 0;">
            <a href="${lugarNE}" class="botonesMenu">Nuestra Empresa</a>
            <a href="${lugarAA}" class="botonesMenu">Aires Acondicionados</a>
            <a href="${lugarRC}" class="botonesMenu">Redes y Comunicaciones</a>
            <a href="${lugarPE}" class="botonesMenu">Plantas Eléctricas</a>
            <a href="${lugarC}" class="botonesMenu">Contactenos</a>

        </div>
    `
}

function insertarMenu(lugarNE, lugarAA, lugarRC, lugarPE, lugarC) {
    const menu = document.getElementById('menu')

    menu.innerHTML = menuComputador(lugarNE, lugarAA, lugarRC, lugarPE, lugarC)
}

