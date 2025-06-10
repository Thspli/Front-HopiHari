document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    const token = String(localStorage.getItem('token').replaceAll('"', ''));
    console.log(token);
    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + token
        },
    });
    const data = await response.json();
    console.log(data);

    console.log("data:", data);
    console.log("data.resultados:", data.Resultado);

    for (var brinquedo of data.Resultado) {
        console.log(brinquedo);

        const grid = document.querySelector(".rides-grid");
        grid.innerHTML = grid.innerHTML +
         `
            <div class="ride-card">
                <div class="ride-image" style="background-image: url('../../imagem/${brinquedo.image}')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">${brinquedo.name}</h3>
                    <div class="ride-time">${brinquedo.waiting_time}</div>
                    <span class="ride-status status-busy">${brinquedo.status}</span>
                </div>
            </div>`;
    }
});