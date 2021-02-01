var w = window.innerWidth
    document.documentElement.clientWidth
    document.body.clientWidth;

var width = document.getElementById("width");
width.innerHTML = w ;

var h = window.innerHeight
    document.documentElement.clientHeight
    document.body.clientHeight;

var height = document.getElementById("height");    
height.innerHTML =  h ;

document.getElementById("pixel").innerHTML = screen.pixelDepth;

document.getElementById("href").innerHTML = window.location.href;
document.getElementById("protocol").innerHTML = window.location.protocol;
document.getElementById("host").innerHTML = window.location.host;
document.getElementById("port").innerHTML = window.location.port;
document.getElementById("hostname").innerHTML = window.location.hostname;

document.getElementById("appname").innerHTML = navigator.appName;
document.getElementById("appver").innerHTML = navigator.appVersion;
document.getElementById("platform").innerHTML = navigator.platform ;
document.getElementById("lang").innerHTML = navigator.language;
document.getElementById("cookie").innerHTML = navigator.cookieEnabled;
    
document.getElementById("length").innerHTML = history.length;
document.getElementById("state").innerHTML = document.readyState;

/*  
Here is the exercise on working on the remaining bom method 



Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 









// Display the BOM Information on the innerHTML of the elements