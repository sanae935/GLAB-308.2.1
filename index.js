//Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
};

/** Loop to log each item in Robin's inventory*/ 
for (const item of adventurer.inventory) {
    console.log(item);
}

// Test the roll method
adventurer.roll();
adventurer.roll();


//Part 2: Class Fantasy

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create an instance for Robin
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Test rolling for companions
robin.roll();
robin.companion.roll();



// Part 3: Class Features

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    fetch() {
        console.log(`${this.name} is fetching something!`);
    }
}

const robinAdventurer = new Adventurer("Robin", "Fighter");
const leoCompanion = new Companion("Leo", "Cat");
robinAdventurer.companion = leoCompanion;

//Part 4: Class Uniforms
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
   
}
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error("Invalid role");
        }
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
   
}
//Part 5: Gather your Party
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healerFactory = new AdventurerFactory("Healer");
const healerRobin = healerFactory.generate("Robin");

//Part 6: Developing Skills
class Adventurer extends Character {
duel(opponent) {
    console.log(`${this.name} is dueling ${opponent.name}!`);
    while (this.health > 50 && opponent.health > 50) {
        const myRoll = this.roll();
        const opponentRoll = opponent.roll();
        if (myRoll > opponentRoll) {
            opponent.health -= 1;
            console.log(`${this.name} wins this round! ${opponent.name}'s health is now ${opponent.health}.`);
        } else {
            this.health -= 1;
            console.log(`${opponent.name} wins this round! ${this.name}'s health is now ${this.health}.`);
        }
    }
    const winner = this.health > 50 ? this : opponent;
    console.log(`${winner.name} is the winner of the duel!`);
}
}
