// let striker;
// let coins = [];
// let pockets = [];
// let isAiming = true;

// function setup() {
//     createCanvas(600, 600);
//     setupBoard();
// }

// function draw() {
//     background(255, 178, 102);
//     drawBoard();

//     // Draw pockets
//     for (let pocket of pockets) {
//         pocket.show();
//     }

//     // Update and draw coins
//     for (let coin of coins) {
//         coin.update();
//         coin.show();
//         coin.checkPocket(pockets);
//     }

//     // Update and draw striker
//     striker.update();
//     striker.show();

//     // Handle aiming and launching the striker
//     if (isAiming) {
//         striker.aim(mouseX, mouseY);
//     }
// }

// function mousePressed() {
//     if (isAiming) {
//         striker.launch();
//         isAiming = false;
//     }
// }

// function setupBoard() {
//     // Create pockets
//     let pocketRadius = 50;
//     pockets.push(new Pocket(35, 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, 35, pocketRadius));
//     pockets.push(new Pocket(35, height - 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

//     // Create coins
//     for (let i = 0; i < 9; i++) {
//         coins.push(new Coin(random(200, 400), random(200, 400), 10));
//     }

//     // Create striker
//     striker = new Striker(width / 2, height - 110, 15);
// }

// function drawBoard() {
//     // Draw the carrom board
//     fill(255, 178, 102);
//     rect(0, 0, width, height);

//     // Draw guidelines
//     stroke(255);
//     fill(0);
//     // rect(100, 100, width - 200, height - 200);
//     // rect(120, 120, width - 240, height - 240);


//     //top striker pos
//     ellipse(150, 105, 15);
//     line(150, 100, width - 150, height - 500);
//     ellipse(width - 150, height - 495, 15);
//     line(150, 110, width - 150, height - 490);

//     //bottom striker pos
//     ellipse(150, 495, 15);
//     line(150, 500, width - 150, height - 100);
//     ellipse(width - 150, height - 105, 15);
//     line(150, 490, width - 150, height - 110);

//     // left striker pos
//     ellipse(115, 150, 15);
//     line(110, 150, width - 490, height - 150);
//     ellipse(width - 485, height - 150, 15);
//     line(120, 150, width - 480, height - 150);

//     // right striker pos
//     ellipse(485, 150, 15);
//     line(490, 150, width - 110, height - 150);
//     ellipse(width - 115, height - 150, 15);
//     line(480, 150, width - 120, height - 150);
// }

// class Pocket {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.r = r;
//     }

//     show() {
//         fill(0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }
// }

// class Coin {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.r = r;
//     }

//     update() {
//         120
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.vel.mult(1); // Friction
//         this.acc.set(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     show() {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }

//     checkPocket(pockets) {
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.pos.set(-100, -100); // Remove coin
//             }
//             else if (this.pos.x >= width || this.pos.x <= 0) {
//                 this.vel.x *= -1;
//             }
//             else if (this.pos.y >= height || this.pos.y <= 0) {
//                 this.vel.y *= -1;
//             }

//         }
//     }
// }

// class Striker extends Coin {
//     constructor(x, y, r) {
//         super(x, y, r);
//     }

//     aim(mouseX, mouseY) {
//         stroke("white");
//         line(this.pos.x, this.pos.y, mouseX, mouseY);
//     }

//     launch() {
//         let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
//         direction.setMag(4);
//         this.applyForce(direction);
//     }


// show() {
//   fill(128, 128, 128);
//   noStroke();
//   ellipse(this.pos.x, this.pos.y, this.r * 2);
// }
// }
// ==========================================================
// let striker;
// let coins = [];
// let pockets = [];
// let isAiming = true;

// function setup() {
//     createCanvas(600, 600);
//     setupBoard();
// }

// function draw() {
//     background(255, 178, 102);
//     drawBoard();

//     // Draw pockets
//     for (let pocket of pockets) {
//         pocket.show();
//     }

//     // Update and draw coins
//     for (let coin of coins) {
//         coin.update();
//         coin.show();
//         coin.checkCollisions(pockets, striker);
//     }

//     // Update and draw striker
//     striker.update();
//     striker.show();
//     striker.checkCollisions(pockets, coins);

//     // Handle aiming and launching the striker
//     if (isAiming) {
//         striker.aim(mouseX, mouseY);
//     }
// }

// function mousePressed() {
//     if (isAiming) {
//         striker.launch();
//         isAiming = false;
//     } else if (isAiming) {
//         striker.launch();
//         isAiming = true;
//     }
// }

// function setupBoard() {
//     // Create pockets
//     let pocketRadius = 50;
//     pockets.push(new Pocket(35, 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, 35, pocketRadius));
//     pockets.push(new Pocket(35, height - 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

//     // Create coins
//     for (let i = 0; i < 15; i++) {
//         coins.push(new Coin(random(200, 400), random(200, 400), 10));
//         // coins.push(new Coin((200, 400), 20));
//     }

//     // Create striker
//     striker = new Striker(width / 2, height - 110, 20);
// }

// function drawBoard() {
//     fill(255, 178, 102);
//     rect(0, 0, width, height);

//     stroke(255);
//     fill(0);

//     // Draw positions and guidelines
//     ellipse(150, 105, 15);
//     line(150, 100, width - 150, height - 500);
//     ellipse(width - 150, height - 495, 15);
//     line(150, 110, width - 150, height - 490);

//     ellipse(150, 495, 15);
//     line(150, 500, width - 150, height - 100);
//     ellipse(width - 150, height - 105, 15);
//     line(150, 490, width - 150, height - 110);

//     ellipse(115, 150, 15);
//     line(110, 150, width - 490, height - 150);
//     ellipse(width - 485, height - 150, 15);
//     line(120, 150, width - 480, height - 150);

//     ellipse(485, 150, 15);
//     line(490, 150, width - 110, height - 150);
//     ellipse(width - 115, height - 150, 15);
//     line(480, 150, width - 120, height - 150);
// }

// class Pocket {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.r = r;
//     }

//     show() {
//         fill(0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 3);
//     }
// }

// class Coin {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.r = r;
//     }

//     update() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.vel.mult(0.99);  // Friction
//         this.acc.set(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     show() {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }

//     checkCollisions(pockets, striker) {
//         // Check collision with pockets
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.pos.set(-100, -100); // Remove coin when it falls into pocket
//             }
//         }

//         // Check collision with canvas edges
//         if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
//             this.vel.x *= -1;
//         }
//         if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
//             this.vel.y *= -1;
//         }
//     }

//     increaseVelocity() {
//         // Increase the velocity of the coin after touching the striker
//         this.vel.mult(1.2);  // Increase speed by 10% each time
//     }
// }

// class Striker extends Coin {
//     constructor(x, y, r) {
//         super(x, y, r);
//         this.initialPosition = createVector(x, y);  // Store the initial position
//         this.initialVelocity = createVector(0, 0);  // Store the initial velocity
//     }

//     aim(mouseX, mouseY) {
//         stroke("white");
//         line(this.pos.x, this.pos.y, mouseX, mouseY);
//     }
//     launch() {
//         let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
//         direction.setMag(4);
//         this.applyForce(direction);
//         this.initialVelocity.set(this.vel.x, this.vel.y); // Store the initial velocity when launched
//     }

//     checkCollisions(pockets, coins) {
//         // Check collision with pockets
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.pos.set(-100, -100); // Remove striker if it falls into pocket
//             }
//         }

//         // Check collision with canvas edges
//         if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
//             this.vel.x *= -1;
//         }
//         if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
//             this.vel.y *= -1;
//         }

//         // Check collision with coins
//         for (let coin of coins) {
//             let distToCoin = p5.Vector.dist(this.pos, coin.pos);
//             if (distToCoin < this.r + coin.r) {
//                 let normal = p5.Vector.sub(coin.pos, this.pos).normalize();
//                 coin.vel.add(normal.mult(3.0)); // Increase velocity to coins

//                 // Increase coin's velocity after collision
//                 coin.increaseVelocity();

//                 this.vel.mult(-1);
//                 this.pos.set(this.initialPosition.x, this.initialPosition.y);
//                 this.vel.set(0, 0); // Reset striker's velocity
//             }
//         }

//     }

// }
// ==========================================================
// let striker;
// let coins = [];
// let pockets = [];
// let isAiming = true;

// function setup() {
//     createCanvas(600, 600);
//     setupBoard();
// }

// function draw() {
//     background(255, 178, 102);
//     drawBoard();

//     // Draw pockets
//     for (let pocket of pockets) {
//         pocket.show();
//     }

//     // Draw coins
//     for (let coin of coins) {
//         coin.update();
//         coin.show();
//         coin.checkCollisions(pockets);
//     }

//     // Ensure striker is initialized before drawing
//     if (striker) {
//         striker.update();
//         striker.show();
//         striker.checkCollisions(pockets, coins);

//         // Draw aiming line
//         if (isAiming) {
//             striker.aim(mouseX, mouseY);
//         }
//     } else {
//         console.log("Striker is not initialized!");
//     }
// }

// function mousePressed() {
//     if (isAiming && striker) {
//         striker.launch();
//         isAiming = false;
//     }
// }

// function setupBoard() {
//     let pocketRadius = 30;
//     pockets.push(new Pocket(35, 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, 35, pocketRadius));
//     pockets.push(new Pocket(35, height - 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

//     for (let i = 0; i < 9; i++) {
//         coins.push(new Coin(random(200, 400), random(200, 400), 10));
//     }

//     striker = new Striker(width / 2, height - 110, 15);
//     console.log("Striker initialized at:", striker.pos.x, striker.pos.y);
// }

// function drawBoard() {
//     fill(255, 178, 102);
//     rect(0, 0, width, height);
// }

// class Pocket {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.r = r;
//     }

//     show() {
//         fill(0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }
// }

// class Coin {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.r = r;
//     }

//     update() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.vel.mult(0.99);
//         this.acc.set(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     show() {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }

//     checkCollisions(pockets) {
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.pos.set(-100, -100);
//             }
//         }

//         if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
//             this.vel.x *= -1;
//         }
//         if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
//             this.vel.y *= -1;
//         }
//     }
// }

// class Striker extends Coin {
//     constructor(x, y, r) {
//         super(x, y, r);
//         this.initialPosition = createVector(x, y);
//     }

//     aim(mouseX, mouseY) {
//         stroke("white");
//         line(this.pos.x, this.pos.y, mouseX, mouseY);
//     }

//     launch() {
//         let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
//         direction.setMag(5);
//         this.applyForce(direction);
//     }

//     checkCollisions(pockets, coins) {
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.resetPosition();
//             }
//         }

//         if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
//             this.vel.x *= -1;
//         }
//         if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
//             this.vel.y *= -1;
//         }

//         for (let coin of coins) {
//             if (p5.Vector.dist(this.pos, coin.pos) < this.r + coin.r) {
//                 let normal = p5.Vector.sub(coin.pos, this.pos).normalize();
//                 coin.vel.add(normal.mult(3));
//                 this.vel.mult(-1);
//                 this.resetPosition();
//             }
//         }
//     }

//     resetPosition() {
//         this.pos.set(this.initialPosition.x, this.initialPosition.y);
//         this.vel.set(0, 0);
//     }

//     show() {
//         if (isNaN(this.pos.x) || isNaN(this.pos.y)) {
//             console.log("Error: Striker position is NaN");
//             this.resetPosition();
//         }
//         fill(128, 128, 128);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }
// }
// ==========================================================


// let striker;
// let coins = [];
// let pockets = [];
// let isAiming = true;

// function setup() {
//     createCanvas(600, 600);
//     setupBoard();
// }

// function draw() {
//     background(255, 178, 102);
//     drawBoard();

//     // Draw pockets
//     for (let pocket of pockets) {
//         pocket.show();
//     }

//     // Update and draw coins
//     for (let coin of coins) {
//         coin.update();
//         coin.show();
//         coin.checkPocket(pockets);
//     }

//     // Update and draw striker
//     striker.update();
//     striker.show();

//     // Handle aiming and launching the striker
//     if (isAiming) {
//         striker.aim(mouseX, mouseY);
//     }
// }

// function mousePressed() {
//     if (isAiming) {
//         striker.launch();
//         isAiming = false;
//     }
// }

// function setupBoard() {
//     // Create pockets
//     let pocketRadius = 50;
//     pockets.push(new Pocket(35, 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, 35, pocketRadius));
//     pockets.push(new Pocket(35, height - 35, pocketRadius));
//     pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

//     // Create coins
//     for (let i = 0; i < 9; i++) {
//         coins.push(new Coin(random(200, 400), random(200, 400), 10));
//     }

//     // Create striker
//     striker = new Striker(width / 2, height - 110, 15);
// }

// function drawBoard() {
//     // Draw the carrom board
//     fill(255, 178, 102);
//     rect(0, 0, width, height);

//     // Draw guidelines
//     stroke(255);
//     fill(0);
//     // rect(100, 100, width - 200, height - 200);
//     // rect(120, 120, width - 240, height - 240);


//     //top striker pos
//     ellipse(150, 105, 15);
//     line(150, 100, width - 150, height - 500);
//     ellipse(width - 150, height - 495, 15);
//     line(150, 110, width - 150, height - 490);

//     //bottom striker pos
//     ellipse(150, 495, 15);
//     line(150, 500, width - 150, height - 100);
//     ellipse(width - 150, height - 105, 15);
//     line(150, 490, width - 150, height - 110);

//     // left striker pos
//     ellipse(115, 150, 15);
//     line(110, 150, width - 490, height - 150);
//     ellipse(width - 485, height - 150, 15);
//     line(120, 150, width - 480, height - 150);

//     // right striker pos
//     ellipse(485, 150, 15);
//     line(490, 150, width - 110, height - 150);
//     ellipse(width - 115, height - 150, 15);
//     line(480, 150, width - 120, height - 150);
// }

// class Pocket {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.r = r;
//     }

//     show() {
//         fill(0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }
// }

// class Coin {
//     constructor(x, y, r) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.r = r;
//     }

//     update() {
//         120
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.vel.mult(1); // Friction
//         this.acc.set(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     show() {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(this.pos.x, this.pos.y, this.r * 2);
//     }

//     checkPocket(pockets) {
//         for (let pocket of pockets) {
//             if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
//                 this.pos.set(-100, -100); // Remove coin
//             }
//             else if (this.pos.x >= width || this.pos.x <= 0) {
//                 this.vel.x *= -1;
//             }
//             else if (this.pos.y >= height || this.pos.y <= 0) {
//                 this.vel.y *= -1;
//             }

//         }
//     }
// }

// class Striker extends Coin {
//     constructor(x, y, r) {
//         super(x, y, r);
//     }

//     aim(mouseX, mouseY) {
//         stroke("white");
//         line(this.pos.x, this.pos.y, mouseX, mouseY);
//     }

//     launch() {
//         let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
//         direction.setMag(4);
//         this.applyForce(direction);
//     }


// show() {
//   fill(128, 128, 128);
//   noStroke();
//   ellipse(this.pos.x, this.pos.y, this.r * 2);
// }
// }

let striker;
let coins = [];
let pockets = [];
let isAiming = true;

function setup() {
    createCanvas(600, 600);
    setupBoard();
}

function draw() {
    background(255, 178, 102);
    drawBoard();

    // Draw pockets
    for (let pocket of pockets) {
        pocket.show();
    }

    // Update and draw coins
    for (let coin of coins) {
        coin.update();
        coin.show();
        coin.checkCollisions(pockets, striker);
    }

    // Update and draw striker
    striker.update();
    striker.show();
    striker.checkCollisions(pockets, coins);

    // Handle aiming and launching the striker
    if (isAiming) {
        striker.aim(mouseX, mouseY);
    }
}

function mousePressed() {
    if (isAiming) {
        striker.launch();
        isAiming = false;
    } else if (isAiming) {
        striker.launch();
        isAiming = true;
    }
}

function setupBoard() {
    // Create pockets
    let pocketRadius = 50;
    pockets.push(new Pocket(35, 35, pocketRadius));
    pockets.push(new Pocket(width - 35, 35, pocketRadius));
    pockets.push(new Pocket(35, height - 35, pocketRadius));
    pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

    // Create coins
    for (let i = 0; i < 15; i++) {
        coins.push(new Coin(random(200, 400), random(200, 400), 10));
        // coins.push(new Coin((200, 400), 20));
    }

    // Create striker
    striker = new Striker(width / 2, height - 110, 20);
}

function drawBoard() {
    fill(255, 178, 102);
    rect(0, 0, width, height);

    stroke(255);
    fill(0);

    // Draw positions and guidelines
    ellipse(150, 105, 15);
    line(150, 100, width - 150, height - 500);
    ellipse(width - 150, height - 495, 15);
    line(150, 110, width - 150, height - 490);

    ellipse(150, 495, 15);
    line(150, 500, width - 150, height - 100);
    ellipse(width - 150, height - 105, 15);
    line(150, 490, width - 150, height - 110);

    ellipse(115, 150, 15);
    line(110, 150, width - 490, height - 150);
    ellipse(width - 485, height - 150, 15);
    line(120, 150, width - 480, height - 150);

    ellipse(485, 150, 15);
    line(490, 150, width - 110, height - 150);
    ellipse(width - 115, height - 150, 15);
    line(480, 150, width - 120, height - 150);
}

class Pocket {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r;
    }

    show() {
        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 3);
    }
}

class Coin {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = r;
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.mult(0.99);  // Friction
        this.acc.set(0, 0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    checkCollisions(pockets, striker) {
        // Check collision with pockets
        for (let pocket of pockets) {
            if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
                this.pos.set(-100, -100); // Remove coin when it falls into pocket
            }
        }

        // Check collision with canvas edges
        if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
            this.vel.x *= -1;
        }
        if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
            this.vel.y *= -1;
        }
    }

    increaseVelocity() {
        // Increase the velocity of the coin after touching the striker
        this.vel.mult(1.2);  // Increase speed by 10% each time
    }
}

class Striker extends Coin {
    constructor(x, y, r) {
        super(x, y, r);
        this.initialPosition = createVector(x, y);  // Store the initial position
        this.initialVelocity = createVector(0, 0);  // Store the initial velocity
    }

    aim(mouseX, mouseY) {
        stroke("white");
        line(this.pos.x, this.pos.y, mouseX, mouseY);
    }
    launch() {
        let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
        direction.setMag(4);
        this.applyForce(direction);
        this.initialVelocity.set(this.vel.x, this.vel.y); // Store the initial velocity when launched
    }

    checkCollisions(pockets, coins) {
        // Check collision with pockets
        for (let pocket of pockets) {
            if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
                this.pos.set(-100, -100); // Remove striker if it falls into pocket
            }
        }

        // Check collision with canvas edges
        if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
      
      this.vel.x *= -1;
        }
        if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
            this.vel.y *= -1;
        }

        // Check collision with coins
        for (let coin of coins) {
            let distToCoin = p5.Vector.dist(this.pos, coin.pos);
            if (distToCoin < this.r + coin.r) {
                let normal = p5.Vector.sub(coin.pos, this.pos).normalize();
                coin.vel.add(normal.mult(3.0)); // Increase velocity to coins

                // Increase coin's velocity after collision
                coin.increaseVelocity();

                this.vel.mult(-1);
                this.pos.set(this.initialPosition.x, this.initialPosition.y);
                this.vel.set(0, 0); // Reset striker's velocity
            }
        }

    }

}
