define('app/render', ['lib/cube'], function(Cube) {
  function Renderer() {
    this.id = 'Renderer';
  }

  Renderer.prototype.initialize = function() {
    // get DIV...init THREE magic.
    this.threeRenderer = new THREE.WebGLRenderer({antialias:true});
    this.threeRenderer.setClearColor(0x000000, 1);

    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;

    this.threeRenderer.setSize(canvasWidth, canvasHeight);

    var div = $('#WebGLCanvas');
    div[0].appendChild(this.threeRenderer.domElement);
    //var div = document.getElementById('')

    this.threeScene = new THREE.Scene();

    this.threeCamera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 100);

    this.threeCamera.position.set(0, 0, 10);
    this.threeCamera.lookAt(this.threeScene.position);
    this.threeScene.add(this.threeCamera);

    var cube = new Cube();
    window.engine.queue(function() {
      var logic = window.engine.findModule('LogicEngine');
      logic.addEntity(cube);
    });
    var boxMesh = cube.render();
    //var boxMesh = new THREE.Mesh(cube.geometry, cube.material);
    this.threeScene.add(boxMesh);
  }

  Renderer.prototype.think = function() {
    // Update render.
    this.threeRenderer.render(this.threeScene, this.threeCamera);
  }

  return Renderer;
});
