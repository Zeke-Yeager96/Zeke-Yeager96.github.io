document.getElementById("BiggerButton").addEventListener("click", BiggerText, false);
document.getElementById("UppercaseButton").addEventListener("click", UppercaseText, false);
document.getElementById("FancyShmancyCheckbox").addEventListener("change", FancyText, false);
document.getElementById("BoringBettyCheckbox").addEventListener("change", BoringText, false);



function UppercaseText()
{
    let userText = document.getElementById("UserTextInput").value;
    document.getElementById("UserTextInput").value = userText.replace(".", "-.").toUpperCase();
   
}
function BiggerText()
{
    alert("Hello, world!");

    document.getElementById("UserTextInput").style.fontSize = "24pt";
}

function BoringText(){

    if(document.getElementById("FancyShmancyCheckbox").checked)
    {
        document.getElementById("FancyShmancyCheckbox").checked = false
    }

    document.getElementById("UserTextInput").style.fontWeight= "";
    document.getElementById("UserTextInput").style.color= "";
    document.getElementById("UserTextInput").style.textDecoration= "";
}

function FancyText()
{
    if(document.getElementById("BoringBettyCheckbox").checked)
    {
        document.getElementById("BoringBettyCheckbox").checked = false
    }

    alert("Fancy text!");

    document.getElementById("UserTextInput").style.fontWeight= "bold";
    document.getElementById("UserTextInput").style.color= "blue";
    document.getElementById("UserTextInput").style.textDecoration= "underline";
}
