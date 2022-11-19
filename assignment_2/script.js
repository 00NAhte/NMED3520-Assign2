  //Code used from https://codepen.io/justpete/pen/ogNBPp  
    var NumberOfWords = 40

    var words = new BuildArray(NumberOfWords)

    // Use the following variables to 
    // define your random words:
    words[1] = "Forest"
    words[2] = "Jungle"
    words[3] = "Beach"
    words[4] = "Futuristic City"
    words[5] = "Medieval Village"
    words[6] = "Cyberpunk"
    words[7] = "Elf"
    words[8] = "Dragon"
    words[9] = "Knight"
    words[10] = "Castle"
    words[11] = "Sea Monster"
    words[12] = "Dwarf"
    words[13] = "Reptile"
    words[14] = "Mammal"
    words[15] = "Cowboy"
    words[16] = "Desert"
    words[17] = "Orc"
    words[18] = "Wizard"
    words[19] = "Assassin"
    words[20] = "Sorcerer"
    words[21] = "Sorceress"
    words[22] = "Amphibian"
    words[23] = "Sword"
    words[24] = "Axe"
    words[25] = "Gun"
    words[26] = "Galaxy"
    words[27] = "Golem"
    words[28] = "Farm"
    words[29] = "Troll"
    words[30] = "Space Station"
    words[31] = "Alien"
    words[32] = "Car"
    words[33] = "Truck"
    words[34] = "Van"
    words[35] = "Airplane"
    words[36] = "Boat"
    words[37] = "Spaceship"
    words[38] = "Rocket"
    words[39] = "Tree"
    words[40] = "Bird"

    function BuildArray(size){
    this.length = size
    for (var i = 1; i <= size; i++){
    this[i] = null}
    return this
    }

    function PickRandomWord(frm) {
    // Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)

    // Display the word inside the text box
    frm.WordBox.value = words[rnd]
    }
