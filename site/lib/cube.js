define('lib/cube', [], function() {
  function Cube() {
    this.geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

    this.materials = [
      new THREE.MeshBasicMaterial({color:0xff0000}),
      new THREE.MeshBasicMaterial({color:0x00ff00}),
      new THREE.MeshBasicMaterial({color:0x0000ff}),
      new THREE.MeshBasicMaterial({color:0xffff00}),
      new THREE.MeshBasicMaterial({color:0x00ffff}),
      new THREE.MeshBasicMaterial({color:0xffffff}),
    ];
    this.material = new THREE.MeshFaceMaterial(this.materials);
  }

  Cube.prototype = {
    render: function() {
      this.boxMesh = new THREE.Mesh(this.geometry, this.material);
      return this.boxMesh;
    },
    animate: function() {
      this.boxMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), 0.075);
    }
  }

  return Cube;
});
