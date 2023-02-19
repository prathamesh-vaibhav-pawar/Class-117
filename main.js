timer_count = 0
timer_check = ""
drawn_image = ""
answer_holder = ""
score = 0
function Draw_thing(){
    Things_to_draw = ["moon","sweater","pants","triangle","pizza slice","circle","clock","cloud"]
    quick_draw = Things_to_draw[Math.floor(Math.random()*Things_to_draw.length)]
    document.getElementById("Things").innerHTML = quick_draw
    console.log(quick_draw)
}