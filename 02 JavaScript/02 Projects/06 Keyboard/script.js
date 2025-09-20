window.addEventListener('keydown', (e) => {
    document.querySelector('h2').innerHTML = `
    <table style="border: 1px solid white;">
        <tr>
            <th>Character</th>
            <th>ASCII Code</th>
            <th>Input Type</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    <br>
    <br>
    <h2>Thanks For Using This Service If You Like Then Share With Your Friends</h2>
    `
})