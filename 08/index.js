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
  const { pets, nome } = item
  if (pets.length > 0) {
    if (pets.length > 1) {
      console.log(`sou ${nome} e tenho ${pets.length} pets`)
    } else {
      console.log(`sou ${nome} e tenho ${pets.length} pet.`)
    }
  } else {
    console.log(`Sou ${nome} e não tenho pets`)
  }
}
