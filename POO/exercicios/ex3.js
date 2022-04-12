//endereço do cleinte, metodo par atualizar
class Cliente{
  
constructor (rua,estado, bairro, cidade){
  this.rua=rua;
  this.bairro=bairro;
  this.cidade=cidade;
  this.estado=estado
}
  //metodo de atualizar
  set Novarua(novarua){
    this.rua=novarua;
  }
  set Novobairro(novobairro){
    this.bairro=novobairro;
  }
  set Novacidade(novacidade){
    this.cidade=novacidade;
  }
  set Novoestado(novoestado){
    this.estado=novoestado;
  }
}

let cliente = new Cliente(
  "Rua são pedro",
  "Santos",
  "Novo  jardins",
  "São paulo"
);
//console.log(cliente);
//cliente.novaRua="Rua das flores";
//console.log(cliente)

//cliente.Novobairro="Gonsalves";
cliente.Novacidade="maceió"
cliente.Novoestado='alagoas'
console.log(cliente)