const PI = 3.14159265358;

const round = number => Math.round(number*100)/100;

const getCircumference = radius => round(2*PI*radius);
const getCircleArea = raidus => round(PI*raidus*raidus);

const getCylinderSurfaceArea = (radius, height) => round(2*PI*radius*height + 2*PI*radius*radius);

module.exports = {
    gc: getCircumference,
    getCylinderSurfaceArea: getCylinderSurfaceArea,
    getCircleArea,
    getSphereVolume: radius => round(4*PI*radius**3/3),
};