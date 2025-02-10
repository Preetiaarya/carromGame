
// Define global variables
let striker; // The main striker object
let coins = []; // Array to store the red coins
let pockets = []; // Array to store pocket positions
let isAiming = true; // Flag to check if aiming mode is active
let score = 0; // Game score

function setup() {
    createCanvas(600, 600); // Create a 600x600 canvas
    setupBoard(); // Initialize board setup (coins, striker, pockets)
}
function draw() {
    background(255, 178, 102); // Set background color to match carrom board

    drawBoard(); // Draw guidelines and board layout

    // Draw all pockets
    for (let pocket of pockets) {
        pocket.show();
    }

    // Update and draw all coins
    for (let coin of coins) {
        coin.update(); // Update position with velocity and friction
        coin.show(); // Display the coin
        coin.checkCollisions(pockets, striker); // Check if the coin goes into a pocket
    }

    // Update and draw striker
    striker.update();
    striker.show();
    striker.checkCollisions(pockets, coins); // Check striker collisions with pockets and coins

    // Handle aiming mode
    if (isAiming) {
        striker.aim(mouseX, mouseY); // Draw aiming line from striker to mouse
    }
}
function mousePressed() {
    if (isAiming) {
        striker.launch(); // Launch the striker towards the aimed direction
        isAiming = false; // Disable aiming mode
    }
}
// function mousePressed() {
//     if (isAiming) {
//         striker.launch();
//         isAiming = false;
//     } else if (isAiming) {
//         striker.launch();
//         isAiming = true;
//     }
// }

function setupBoard() {
    let pocketRadius = 50; // Pocket size

    // Create four corner pockets
    pockets.push(new Pocket(35, 35, pocketRadius));
    pockets.push(new Pocket(width - 35, 35, pocketRadius));
    pockets.push(new Pocket(35, height - 35, pocketRadius));
    pockets.push(new Pocket(width - 35, height - 35, pocketRadius));

    // Create 15 random coins in the center of the board
    for (let i = 0; i < 15; i++) {
        coins.push(new Coin(random(200, 400), random(200, 400), 10));
    }

    // Create the striker at the bottom center
    striker = new Striker(width / 2, height - 110, 20);
}
function drawBoard() {
    fill(255, 178, 102);
    rect(0, 0, width, height); // Draw board background

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
// Class for Pockets
class Pocket {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r;
    }

    show() {
        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 3); // Draw pocket
    }
}
// Class for Coins
class Coin {
    constructor(x, y, r) {
        this.pos = createVector(x, y); // Position of the coin
        this.vel = createVector(0, 0); // Velocity of the coin
        this.acc = createVector(0, 0); // Acceleration of the coin
        this.r = r; // Radius of the coin
    }

    update() {
        this.vel.add(this.acc); // Apply acceleration to velocity
        this.pos.add(this.vel); // Apply velocity to position
        this.vel.mult(0.99); // Apply friction (slow down movement)
        this.acc.set(0, 0); // Reset acceleration
    }

    applyForce(force) {
        this.acc.add(force); // Add force to acceleration
    }

    show() {
        fill(255, 0, 0); // Red color for coins
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r * 2); // Draw coin

        fill(0);
        textSize(20);
        text("Score: " + score, width / 2, 25); // Display score
    }


    checkCollisions(pockets, striker) {
        // Check collision with pockets
        for (let pocket of pockets) {
            if (p5.Vector.dist(this.pos, pocket.pos) < pocket.r) {
                this.pos.set(-100, -100); // Remove coin when it falls into pocket
                // coins.splice(i, 1);
                score += 1; // Increase score
            }
        }
        // Check collision with canvas edges
        if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
            this.vel.x *= -1; // Reverse x-direction on collision
        }
        if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
            this.vel.y *= -1; // Reverse y-direction on collision
        }
    }
    isInPocket() {
        for (let pocket of pockets) {
            let d = p5.Vector.dist(this.pos, pocket.pos);
            if (d < pocket.r) {
                return true;
            }
        }
        return false;
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
        line(this.pos.x, this.pos.y, mouseX, mouseY); // Draw aiming line
    }
    launch() {
        let direction = createVector(mouseX - this.pos.x, mouseY - this.pos.y);
        direction.setMag(4); // Set fixed launch speed
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

