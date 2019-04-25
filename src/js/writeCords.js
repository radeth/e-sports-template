const writeCords = (cords) => {
    console.log(cords)
    let cordsHTML = document.getElementById('cords')
    cordsHTML.innerHTML = '';
    cords.forEach(element=>{
        cordsHTML.innerHTML += `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.lat}</td>
        <td>${element.lng}</td>
      </tr>`
    })
}
export default writeCords