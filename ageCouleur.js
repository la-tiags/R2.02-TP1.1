const anneeActuelle = new Date().getFullYear();
const anneNaissance = prompt("Quel est votre année de naissance ?")
const age = anneeActuelle - anneNaissance
if (age >= 18) {
    console.log(`Vous avez ` + age + ` ans, vous êtes %cmajeur%c !`, "color: green; font-size: 20px; style: bold; background-color: white;");
} else {
    console.log(`Vous avez ` + age + ` ans, vous êtes %cmineur%c...`, "color: red; font-size: 20px; style: bold; background-color: white;");
}