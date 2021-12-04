/*
Ստեղծեք canvas և դրա ներքևում button։ button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)` կամայական տեղում, կամայական չափի,  որը կշարժվի կամայական ուղղությամբ։ Որպես հավելում, կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։ Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, որ միշտ մնա canvas-ի ներսում։ Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ։ Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը։  
*/

const canvas = document.querySelector("canvas");
const btn = document.querySelector("button");
const context = canvas.getContext("2d");

let data = {
  balls: []
};

function update() {
  data.balls.forEach(function(ball) {
    ball.update();
  });
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.balls.forEach(function(ball) {
    ball.draw();
  });
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}
loop();

function Ball() {
  this.r = random(5, 40);
  this.x = random(this.r, canvas.width - this.r);
  this.y = random(this.r, canvas.height - this.r);

  this.xDelta = random(-5, 5);
  this.yDelta = random(-5, 5);

  this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";

  this.update = function() {
    if ((this.x + this.r) > canvas.width ||
      this.x - this.r < 0) {
      this.xDelta *= -1;
    }
    if ((this.y + this.r) > canvas.height ||
      this.y - this.r < 0) {
      this.yDelta *= -1;
    }

    this.x += this.xDelta;
    this.y += this.yDelta;
  };

  this.draw = function() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    context.fill();
  };
}

btn.addEventListener("click", function() {
  const ball = new Ball();
  data.balls.push(ball);
});


function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



//////////////////////////////////////////////////////////////////////////////////////////////




const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?region=0,0,1920,1080";

class GameObj {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this._speed = 1;
    this._xDelta = 0;
    this._yDelta = 0;
    
    this._img = document.createElement("img");
    this._img.src = "https://lh3.googleusercontent.com/proxy/8zRvisnC-xcJ2af0pAytgVkGwLkDLX3tBOSPx3kktk3c-Vh5WVb6THOxdSEuE_1ZjH28wiTNWc_pBud5iBQ-x_QBjfBhbDQuQbLPVa8";
  }
  getBoundingBox() {
    return {
      x: this._x,
      y: this._y,
      width: this._width,
      height: this._height
    };
  }
  update() {
    this._x += this._xDelta;
    this._y += this._yDelta;
  }
  render() {
    context.drawImage(this._img, this._x, this._y, this._width, this._height);
  }
  goRight() {
    this._xDelta = this._speed;
  }
  goLeft() {
    this._xDelta = this._speed * -1;
  }
  stop() {
    this._xDelta = 0;
  }
}

class Hero extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._img = document.createElement("img");
    this._img.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";

    this._audio = document.createElement("audio");
    this._audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";
  }
  fire() {
    const x = this._x + this._width,
      y = this._y + this._height / 2,
      width = 20,
      height = 20;

    const bullet = new Bullet(x, y, width, height);
    bullet.goRight();
    data.bullets.push(bullet);

    this._audio.currentTime = 0;
    this._audio.play();
  }
}

class Rabbit extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._img = document.createElement("img");
    this._img.src = "https://preview.redd.it/4e15s7ljf2o41.png?width=256&format=png&auto=webp&s=99b4d97d6c2eeacbb218fc6e31773bd3aecc385c";
  }
  update() {
    super.update();

    if ((this._xDelta < 0 && this._x + this._width < 0) ||
      (this._xDelta > 0 && this._x > canvas.width)) {
      this.deleteMe = true;
    }
  }
  die() {
    this.deleteMe = true;
  }
}

class Bullet extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._speed = 5;
    
    this._img = document.createElement("img");
    this._img.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png";

    this._stabAudio = document.createElement("audio");
    this._stabAudio.src = "https://soundbible.com//mp3/Stab-SoundBible.com-766875573.mp3";
  }
  update() {
    super.update();

    if ((this._xDelta < 0 && this._x + this._width < 0) ||
      (this._xDelta > 0 && this._x > canvas.width)) {
      this.deleteMe = true;
    }

    data.rabbits.forEach((rabbit) => {
      if (intersect(this.getBoundingBox(), rabbit.getBoundingBox())) {
        rabbit.die();
        this._stabAudio.currentTime = 0;
        this._stabAudio.play();
        this.deleteMe = true;
      }
    });
  }
}

let data = {
  hero: new Hero(10, 140, 100, 100),
  bullets: [],
  rabbits: []
};

function intersect(rect1, rect2) {
  const x = Math.max(rect1.x, rect2.x),
    num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
    y = Math.max(rect1.y, rect2.y),
    num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
  return (num1 >= x && num2 >= y);
};

function update() {
  data.hero.update();
  data.rabbits.forEach((rabbit) => rabbit.update());
  data.bullets.forEach((bullet) => bullet.update());

  data.bullets = data.bullets.filter((bullet) => bullet.deleteMe !== true);
  data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true);
  
  if (data.rabbits.length === 0) {
    const rabbit = new Rabbit(canvas.width, 140, 100, 100);
    rabbit.goLeft();
    data.rabbits.push(rabbit);
  }
}

function render() {
  context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  data.hero.render();
  data.bullets.forEach((bullet) => bullet.render());
  data.rabbits.forEach((rabbit) => rabbit.render());
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();

document.addEventListener("keydown", (evt) => {
  if (evt.code === "ArrowRight") {
    data.hero.goRight();
  } else if (evt.code === "ArrowLeft") {
    data.hero.goLeft();
  } else {
    data.hero.fire();
  }
});

document.addEventListener("keyup", (evt) => {
  data.hero.stop();
});


/////////////////////////////////////////////////////////////////////////////////////


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?region=0,0,1920,1080";

class GameObj {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    this._speed = 1;
    this._xDelta = 0;
    this._yDelta = 0;
    
    this._img = document.createElement("img");
    this._img.src = "https://lh3.googleusercontent.com/proxy/8zRvisnC-xcJ2af0pAytgVkGwLkDLX3tBOSPx3kktk3c-Vh5WVb6THOxdSEuE_1ZjH28wiTNWc_pBud5iBQ-x_QBjfBhbDQuQbLPVa8";
  }
  getBoundingBox() {
    return {
      x: this._x,
      y: this._y,
      width: this._width,
      height: this._height
    };
  }
  update() {
    this._x += this._xDelta;
    this._y += this._yDelta;
  }
  render() {
    context.drawImage(this._img, this._x, this._y, this._width, this._height);
  }
  goRight() {
    this._xDelta = this._speed;
  }
  goLeft() {
    this._xDelta = this._speed * -1;
  }
  stop() {
    this._xDelta = 0;
  }
}

class Hero extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._img = document.createElement("img");
    this._img.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";

    this._audio = document.createElement("audio");
    this._audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";
  }
  fire() {
    const x = this._x + this._width,
      y = this._y + this._height / 2,
      width = 20,
      height = 20;

    const bullet = new Bullet(x, y, width, height);
    bullet.goRight();
    data.objects.push(bullet);

    this._audio.currentTime = 0;
    this._audio.play();
  }
}

class Rabbit extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._img = document.createElement("img");
    this._img.src = "https://preview.redd.it/4e15s7ljf2o41.png?width=256&format=png&auto=webp&s=99b4d97d6c2eeacbb218fc6e31773bd3aecc385c";
  }
  update() {
    super.update();

    if ((this._xDelta < 0 && this._x + this._width < 0) ||
      (this._xDelta > 0 && this._x > canvas.width)) {
      this.deleteMe = true;
    }
  }
  die() {
    this.deleteMe = true;
  }
}

class Bullet extends GameObj {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    
    this._speed = 5;
    
    this._img = document.createElement("img");
    this._img.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png";

    this._stabAudio = document.createElement("audio");
    this._stabAudio.src = "https://soundbible.com//mp3/Stab-SoundBible.com-766875573.mp3";
  }
  update() {
    super.update();

    if ((this._xDelta < 0 && this._x + this._width < 0) ||
      (this._xDelta > 0 && this._x > canvas.width)) {
      this.deleteMe = true;
    }

    const rabbits = data.objects.filter(obj => obj instanceof Rabbit);
    rabbits.forEach((rabbit) => {
      if (intersect(this.getBoundingBox(), rabbit.getBoundingBox())) {
        rabbit.die();
        this._stabAudio.currentTime = 0;
        this._stabAudio.play();
        this.deleteMe = true;
      }
    });
  }
}

let data = {
  objects: [new Hero(10, 140, 100, 100)]
};

function intersect(rect1, rect2) {
  const x = Math.max(rect1.x, rect2.x),
    num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
    y = Math.max(rect1.y, rect2.y),
    num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
  return (num1 >= x && num2 >= y);
};

function update() {
  data.objects.forEach((obj) => obj.update());
  data.objects = data.objects.filter((obj) => obj.deleteMe !== true);
  
  const rabbits = data.objects.filter(obj => obj instanceof Rabbit);
  if (rabbits.length === 0) {
    const rabbit = new Rabbit(canvas.width, 140, 100, 100);
    rabbit.goLeft();
    data.objects.push(rabbit);
  }
}

function render() {
  context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  data.objects.forEach(obj => obj.render());
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();

document.addEventListener("keydown", (evt) => {
  const hero = data.objects.find(obj => obj instanceof Hero);
  if (evt.code === "ArrowRight") {
    hero.goRight();
  } else if (evt.code === "ArrowLeft") {
    hero.goLeft();
  } else {
    hero.fire();
  }
});

document.addEventListener("keyup", (evt) => {
  const hero = data.objects.find(obj => obj instanceof Hero);
  hero.stop();
});