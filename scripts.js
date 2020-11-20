/**
 * Vars
 */
var points = [];
var rafID = null;

var guiVars = function() {
  this.totalPoints = 6;
  this.viscosity = 20;
  this.mouseDist = 80;
  this.damping = 0.15;
  this.showIndicators = false;
  this.leftColor = '#a8d0e6';
  this.rightColor = '#f76c6c';
  this.rightColors = '#f76c6c';
}
var vars = new guiVars();

window.onload = function() {
  var gui = new dat.GUI();
  gui.add(vars, 'showIndicators');
  var controller = gui.add(vars, 'totalPoints', 2, 20).step(1);
  gui.add(vars, 'viscosity', 10, 500);
  gui.add(vars, 'mouseDist', 20, 400);
  gui.add(vars, 'damping', 0.01, 0.5);
  gui.addColor(vars, 'leftColor');
  gui.addColor(vars, 'rightColor');
  gui.addColor(vars, 'rightColors');

  controller.onChange(function() {
    cancelAnimationFrame(rafID);
    initCanvas();
  });
};
