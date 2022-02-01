class ControllerDb {
  constructor() {}

  pesquisarItem(id) {
    var id = $("input[name=id]").val();

    let info = infoItemAjax.requestAjax(id, key);

    console.log(info);

    let infoItem = `
    <div class="d-flex justify-content-around p-3 rounded">
        <div>
            <p>Nome: ${info.id}</p>
            <p>Nome: ${info.name}</p>
            <p>Preço: ${info.price}</p>
            <p>Lv requerido: ${info.requiredLevel}</p>
        </div>
        <div class=""> 
            <img src="https://static.divine-pride.net/images/items/item/${id}.png?server=bRO" width="50" height="50">
        </div>
    </div>
    `;

    $("#infoItem").empty();

    $("#infoItem").append(infoItem);
  }
}
