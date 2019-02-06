var count=0;

function button_press(){
    count++;
    if(count%2==0){
            //If the number of times button pressed is an even numner
            var image_url=img(count);
            console.log(image_url);
            var html_para4= count + "<br> <img src="+image_url+">";
            document.getElementById("button_press").innerHTML= html_para4;
        }
    else{
        //if the number of times button pressed is an odd number    
        document.getElementById("button_press").innerHTML= count + "<br> Odd Number! Sorry :(  ";
    }
}

function img(a){
    //if(a%==2){
    return "http://3.bp.blogspot.com/-tXOwfPHY2vc/Tj7n1PpXr3I/AAAAAAAAAJ0/L_6k-8rG7oY/s1600/oddeven.jpg"
    

}

