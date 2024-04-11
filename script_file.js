
    function funrock()
    {
        var player=document.getElementById("r").value;
        var comp=Math.floor(Math.random(0,3)*3);
        tab=document.getElementById("choice");
        tab.style.display="none";
        tab2=document.getElementById("demo");
        tab2.style.display="block";
        if(comp==2){
            document.getElementById("imgd").innerHTML="<img src='rock_hit_sci.png'>";
            document.getElementById("demo").innerHTML="You : Rock <br> Opponent : Scissor <br> You Win!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else if(comp==1){
            document.getElementById("imgd").innerHTML="<img src='paper_crush_rock.png'>";
            document.getElementById("demo").innerHTML="You : Rock <br> Opponent : Paper <br> You Lost!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else{
            
            document.getElementById("imgd").innerHTML="<img src='rock_rock.png'>";
            document.getElementById("demo").innerHTML="You : Rock <br> Opponent : Rock <br> It's a tie!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
    }

    function funpaper()
    {
        var player=document.getElementById("p").value;
        var comp=Math.floor(Math.random(0,3)*3);
        tab=document.getElementById("choice");
        tab.style.display="none";
        tab2=document.getElementById("demo");
        tab2.style.display="block";
        if(comp==0){
            document.getElementById("imgd").innerHTML="<img src='paper_crush_rock.png'>";
            document.getElementById("demo").innerHTML="You : Paper <br> Opponent : Rock <br> You Win!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else if(comp==2){
            document.getElementById("imgd").innerHTML="<img src='sci_cuts_paper.png'>";
            document.getElementById("demo").innerHTML="You : Paper <br> Opponent : Scissor <br> You Lost!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else{
            document.getElementById("imgd").innerHTML="<img src='paper_paper.png'>";
            document.getElementById("demo").innerHTML="You : Paper <br> Opponent : Paper <br> It's a tie!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
    }

    function funsci()
    {
        var player=document.getElementById("s").value;
        var comp=Math.floor(Math.random(0,3)*3);
        tab=document.getElementById("choice");
        tab.style.display="none";
        tab2=document.getElementById("demo");
        tab2.style.display="block";
        if(comp==1){
            document.getElementById("imgd").innerHTML="<img src='sci_cuts_paper.png'>";
            document.getElementById("demo").innerHTML="You : Scissor <br> Opponent : Paper <br> You Win!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else if(comp==0){
            document.getElementById("imgd").innerHTML="<img src='rock_hit_sci.png'>";
            document.getElementById("demo").innerHTML="You : Scissor <br> Opponent : Rock <br>  You Lost!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
        else{
            document.getElementById("imgd").innerHTML="<img src='sci_sci.png'>";
            document.getElementById("demo").innerHTML="You : Scissor <br> Opponent : Scissor <br>  It's a tie!";
            document.getElementById("play1").innerHTML="<button onclick='window.location.reload()' style='color:white;'><h2>Play Again</h2></button>";
            document.getElementById("play2").innerHTML="<button style='color:white;'><a href='index.html'><h2>End Game</h2></a></button>";
        }
    }