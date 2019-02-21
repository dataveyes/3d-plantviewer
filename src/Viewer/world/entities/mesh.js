import * as THREE from 'three'

export default class Mesh {
  constructor (geometry, parent) {
    geometry.computeVertexNormals()

    const material = new THREE.MeshStandardMaterial({ transparent: false, opacity: 0.5, color: 0x0055ff, flatShading: true })
    this.object = new THREE.Mesh(geometry, material)
    this.object.castShadow = true
    this.object.receiveShadow = true
    this.object.position.x = 100

    if (parent) parent.add(this.object)
  }

  setPosition (x = 0, y = 0, z = 0) {
    this.object.position.x = x
    this.object.position.y = y
    this.object.position.z = z

    return this
  }

  setVisible (boolean) {
    this.object.visible = boolean
  }
}
