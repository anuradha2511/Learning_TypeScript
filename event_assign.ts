class Application {
    public id: number;
    public name: string;
    public description: string;
    public starttime: number | string;
    public address: string;
    public display(): void {
        console.log("Event management for Farewell ");

    }

}

class Organizer extends Application {
    constructor(id: number, name: string) {
        super();
        this.id = id;
        this.name = name;

    }
    public display(): void {
        super.display();

        console.log(`${this.id} ${this.name}`);

    }
}

class Even extends Application {
    constructor(id: number, name: string, description: string, starttime: number | string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
    }
    public display(): void {
        super.display();
        console.log(`${this.id} ${this.name} ${this.description} ${this.starttime} `);

    }
}

class Venue extends Application {
    constructor(id: number, name: string, description: string, address: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    public display(): void {
        super.display();
        console.log(`${this.id} ${this.name} ${this.description} ${this.address}`);

    }

}
let display: Application[] = new Array(
    new Organizer(25, "Arnav"),
    new Even(25, "Arnav", "Event for Farewell part", "5 to 7 pm"),
    new Venue(25, "Arnav", "Welcome to Farewell party", "Near Alankar hotel"));
for (const per of display) {
    per.display();
}