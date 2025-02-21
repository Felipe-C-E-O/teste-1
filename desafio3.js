class heroi {
    constructor (nome , idade , tipo ){
        this.nomeHeroi = nome
        this.idadeHeroi = idade
        this.tipoHeroi = tipo

    }
    atacar(){
        let ataque
        if (this.tipoHeroi === "Mago"){
            ataque = "Magia"
        }
        else if (this.tipoHeroi === "Guerreiro"){
            ataque = "Espada"
        }
        else if (this.tipoHeroi === "Monge"){
            ataque = "Artes marciais"}
        else if (this.tipoHeroi === "Ninja"){
            ataque = "Shuriken"}
        console.log("O " + this.tipoHeroi + " atacou usando " + ataque)
    }

}

let heroi1 = new heroi("Felipe", 22 , "Mago")
let heroi2 = new heroi("Maggi", 102 , "Monge")
let heroi3 = new heroi("Naruto", 15 , "Ninja")
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()