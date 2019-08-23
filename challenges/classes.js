// 1.. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(CuboidMakerAttributes){
        this.length = CuboidMakerAttributes.length;
        this.width = CuboidMakerAttributes.width;
        this.height = CuboidMakerAttributes.height;
    }
volume(){
    return this.length * this.width * this.height;
}
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

  
  const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
  })
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(CubeMakerAttributes){
        super(CubeMakerAttributes);
        this.length = CubeMakerAttributes.length;
        this.width = CubeMakerAttributes.width;
        this.height = CubeMakerAttributes.height;
    }
    cubeVolume(){
        return this.length * this.length * this.length;
    }
    cubeSurfaceArea(){
        return this.height * this.width * 6;
    }
}

const cube = new CubeMaker ({
    length: 5,
    width: 5,
    height: 5
  })

console.log(cube.cubeVolume()); // 125
console.log(cube.cubeSurfaceArea()); // 150