

var cj, cop1,cop2, bullet, copIMG, cop1Bullet, cop2Bullet, bullet1, bulletSound, copBulletSound, bgImg, dieSound
  var bulletGroup, cop1bGroup, cop2bGroup
  var cjImg
  function preload()
  {
     bgImg=loadImage("WhatsApp Image 2021-05-23 at 1.49.10 PM.jpeg")
     cjImg=loadImage("CJ.png");
    copIMG=loadImage("cop down.png")
    bulletSound = loadSound("M10 HEADSHOT SOUND [FREE FIRE].mp3")
    copBulletSound = loadSound ("yt1s.com - Laser Gun Sound Effect.mp3")
    dieSound = loadSound ("GTA V Wasted Green screen sound effect.mp3")
  }
  //

  function setup() {
    createCanvas(windowWidth,windowHeight);
    cj=createSprite(50,50,20,20);
    cj.addImage(cjImg);
    cop1=createSprite(windowWidth-130,windowHeight/2-200,20,20);
    cop2=createSprite(windowWidth-200,windowHeight-50,20,20);
    cop1.addImage(copIMG);
    cop2.addImage(copIMG);
    copMove();
   bulletGroup= new Group()
   cop1bGroup= new Group()
   cop2bGroup=new Group()
   cj.scale = 1.5;
    cop1.scale = 1.5;
    cop2.scale = 1.5;

  }

  function draw() {
    background(bgImg);
  
    cjMove();
    shootBullet();
    copShoot();
   //touching();
     caught()

    var edges=createEdgeSprites()
    cj.bounceOff(edges)
    cop1.bounceOff(edges)
    cop2.bounceOff(edges)




    drawSprites();

  }

  function cjMove() 
  {
      if (keyDown("D")) {
        cj.x=cj.x+2;
      }
      if (keyDown("A")) {
        cj.x=cj.x-2;
      }
      if (keyDown("W")) {
        cj.y=cj.y-2;
      }
      if (keyDown("S")) {
        cj.y=cj.y+2;

      }


    }
  function shootBullet()
  {
      if (keyWentDown("RIGHT_ARROW")){
      bullet=createSprite(cj.x,cj.y,5,5);
      bullet.velocityX=+7;
      bullet.shapeColor= "white"
        bulletSound.play()
      }

      if (keyWentDown("LEFT_ARROW")){
        bullet1=createSprite(cj.x,cj.y,5,5);
        bullet1.velocityX=-7;
         bullet1.shapeColor= "white"
         bulletSound.play()
        }
    // bulletGroup.add(bullet)
     //bulletGroup.add(bullet1)
  }


  function copMove()
  {
    cop1.velocityX=0
    cop1.velocityY=3
    cop2.velocityX=0
    cop2.velocityY=-3

}



  function copShoot()
  {
      if(frameCount%29===0)
      {
        cop1Bullet=createSprite(cop1.x,cop1.y,5,5)
        cop1Bullet.shapeColor="red"
        copBulletSound.play()

        cop2Bullet=createSprite(cop2.x,cop2.y,5,5)
        cop2Bullet.shapeColor="red"
         copBulletSound.play()

        cop1Bullet.velocityX=-5
        cop1Bullet.velocityY=5
        cop2Bullet.velocityX=-5
        cop1Bullet.velocityY=5

       //cop1bGroup.add(cop1Bullet);
      // cop2bGroup.add(cop2Bullet);
      }

  }

  function caught()
{
    if(cj.isTouching(cop1||cj.isTouching(cop1)))
      {
        cj.destroy()
        dieSound.play()
        cop1.velocityX=0
        cop1.velocityY=0
        cop2.velocityX=0
        cop2.velocityY=0
      }
}

function die()
{
  if(cj.isTouching(cop1Bullet||cj.isTouching(cop2Bullet)))
    {
      cj.destroy()
      dieSound.play()
      cop1.velocityX=0
        cop1.velocityY=0
        cop2.velocityX=0
        cop2.velocityY=0
    }
}
