const anneeActuelle = new Date().getFullYear();
const anneNaissance = prompt("Quel est votre année de naissance ?")
const age = anneeActuelle - anneNaissance
if (age >= 18) {
    console.log(`Vous avez ` + age + ` ans, vous êtes majeur !`)
} else {
    console.log(`Vous avez ` + age + ` ans, vous êtes mineur...`)
}