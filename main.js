var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var last_x, last_y
var current_x, current_y
var mouseEvent = "empty"
color = "black"
width = 2
radius = 36
canvas.addEventListener("mousedown", mouse_down)
function mouse_down(e){
    color = document.getElementById("color").value
    width = document.getElementById("width_of_line").value
    radius = document.getElementById("radius").value
   mouseEvent = "mouse_down"
}
canvas.addEventListener("mousemove", mouse_move)
function mouse_move(e){

   if(mouseEvent == "mouse_down"){
     console.log("mouse move starts") 
     ctx.moveTo(last_x, last_y)
     current_x = e.clientX - canvas.offsetLeft
     current_y = e.clientY - canvas.offsetTop
     console.log(current_x, current_y)
     ctx.beginPath()
     ctx.strokeStyle = color
     ctx.arc(current_x, current_y, radius, 0, Math.PI*2)
     ctx.stroke()
   }
   last_x = current_x
   last_y = current_y  
}
canvas.addEventListener("mouseup", mouse_up)
function mouse_up(e){
   mouseEvent = "mouse_up"
}
canvas.addEventListener("mouseleave", mouse_leave)
function mouse_leave(e){
   mouseEvent = "mouse_leave"
}
function clearArea() {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}


