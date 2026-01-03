
function GenrateTable() {
    let num = document.getElementById("num").value;
    let range = document.getElementById("range").value;

    for (let i = 1; i <= range; i++) {
        console.log(i);
        let result = document.getElementById("result");
        result.innerHTML +=`
        <table>
        <tr>
        <td> ${num} x ${i} = ${num * i} </td>
        </tr>
        </table>
        `
        
    }
}
// document.write(` ${num} x ${i} = ${num * i} <br> `)