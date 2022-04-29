
AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("click", (e) => {
        // if (e.key === "z") {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          bullet.setAttribute("material", "color", "yellow");
  
          var cam = document.querySelector("#camera-rig");
          pos = cam.getAttribute("position");
  
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y + 1.7 ,
            z: pos.z -0.5,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
        //   var direction = new THREE.Vector3();
        //   camera.getWorldDirection(direction);
        //   var impulse=new CANNON.Vector3(-4,4,2)
        //   var worldPoint=new CANNON.Vector3().copy(bullet.getAttribute("position"))
        //   bullet.body.applyImpulse(impulse,worldPoint)
          //set the velocity and it's direction
          bullet.setAttribute("velocity", direction.multiplyScalar(-40));
  
          var scene = document.querySelector("#scene");
  
          //set the bullet as the dynamic entity
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "50",
          });
  
          //add the collide event listener to the bullet
          bullet.addEventListener("collide", this.removeBullet);
  
          scene.appendChild(bullet);
  
        //}
      });
    },
    removeBullet: function (e) {
      var scene = document.querySelector("#scene");
      
      //bullet element
      var element = e.detail.target.el;
  
      //element which is hit
      var elementHit = e.detail.body.el;
  
      if (elementHit.id.includes("enemy")) {
        //Add code here
        var countTankel=document.querySelector("#countTank")
        var tanksFired=parseInt(countTankel.getAttribute("text").value)
        tanksFired-=1
        countTankel.setAttribute("text",{value:tanksFired})
        if(tanksFired===0){
          var txt=document.querySelector("#completed")
          txt.setAttribute("visible",true)
        }
        
        scene.removeChild(elementHit);
      }
      //remove event listener
      element.removeEventListener("collide", this.removeBullet);
  
      //remove the bullets from the scene   
      scene.removeChild(element);
    },
  });
  
  