var checkbox = document.querySelector("input[name=theme]");
var imgLight = document.getElementById('lightImage');

checkbox.addEventListener("change",function(){
    if (this.checked)
    {
        trans()
        document.documentElement.setAttribute("data-theme","dark");
        imgLight.src = "../Light/source/BackgroundImage/darkOne.png";
    }
    else {
        trans()
        document.documentElement.setAttribute("data-theme","light")
        imgLight.src = "../Light/source/BackgroundImage/LightOneWeb.png";
        // imgDark.classList.add("hide");
        // imgLight.classList.remove("hide");
    }
} );

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(()=>{
        document.documentElement.classList.remove("transition");
    },1000);
};