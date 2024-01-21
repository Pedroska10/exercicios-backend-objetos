const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];
console.log(usuarios.length);
for (item of usuarios) {
  if (item.pets.length < 1) {
    console.log(`sou ${item.nome} e não tenho pets`);
  } else if (item.pets.length > 1) {
    console.log(`sou ${item.nome} e tenho ${item.pets.length} pets`);
  } else {
    console.log(`sou ${item.nome} e tenho ${item.pets.length} pet`);
  }
}
