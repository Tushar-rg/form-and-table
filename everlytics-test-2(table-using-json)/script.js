fetch("data.json")
.then(function(response){
    return response.json()
})
.then(function(machineData){
    let placeholder = document.querySelector('#table')
    let out = ""
    for(let i=1; i<machineData.length; i++){
        out += `
            <tr>
                <td>${machineData[i][0]}</td>
                <td>${machineData[i][1]}</td>
                <td>
                    <table>
                        <th class="nested">${machineData[i][2]}</th>
                        <th class="nested">${machineData[i][3]}</th>
                        <th class="nested">${machineData[i][4]}</th>
                    </table>
                </td>
                <td>${machineData[i][5]}</td>
                <td>${machineData[i][6]}</td>
                <td>${machineData[i][7]}</td>
                <td>${machineData[i][8]}</td>
                <td>${machineData[i][9]}</td>
                <td>${machineData[i][10]}</td>
                <td>
                    <table>
                        <th class="nested">${machineData[i][11]}</th>
                        <th class="nested">${machineData[i][12]}</th>
                        <th class="nested">${machineData[i][13]}</th>
                    </table>
                </td>
            </tr>
        `
    }
    placeholder.innerHTML = out
})