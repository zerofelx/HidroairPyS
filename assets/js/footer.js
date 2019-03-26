function returnarFooter(path) {
    return `
        <div class="bloqueFooter">
            <img src="${path}" width="60">
        </div>
    `
}


function insertarFooter(path) {
    const footer = document.getElementById('footer')
    footer.innerHTML = returnarFooter(path)
}