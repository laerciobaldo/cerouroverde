function pedido(){

let nome=document.getElementById("nome").value
let cidade=document.getElementById("cidade").value
let telefone=document.getElementById("telefone").value

let total=0
let texto="Pedido de camisetas Ouro Verde%0A"

function item(nome,tam,qtd,preco){

if(qtd>0){

total+=qtd*preco

texto+=nome+" Tam "+tam+" Qtd "+qtd+"%0A"

}

}

item("Passeio Verde",tam1.value,q1.value,80)
item("Jogo Branca",tam2.value,q2.value,100)
item("Jogo Verde",tam3.value,q3.value,100)
item("Jogo Preta",tam4.value,q4.value,100)
item("Goleiro Dourada",tam5.value,q5.value,100)

texto+="Total: R$"+total

let url="https://wa.me/5549991279843?text="+texto

window.open(url)

}
