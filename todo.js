function add(){
    var ul = document.getElementById("list");
    var list = document.createElement("li");
    var ip = document.getElementById("ip");
    list.innerHTML = ` ${ip.value} <button onclick="remove(event)">delete</button>`;
    ul.append(list);
}

function remove(event)
{
  event.target.parentElement.remove();
}