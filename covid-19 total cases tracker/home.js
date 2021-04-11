function showData()
{
    event.preventDefault();
    var country=document.getElementById("name").value;
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var death=document.getElementById("death");

    console.log(start);

    if(country=='' || start=='' || end=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";

        fetch(url)
        .then((text) => text.json())
        .then((text) => {
            console.log(text);
            var length=text.length;
            var index=length-1;

            var c=text[index].Confirmed;
            var a=text[index].Active;
            var d=text[index].Deaths;

           document.getElementById("text").innerHTML+="<p>Confirmed Cases: "+c+"</p>"+"<p>Active Cases: "+a+"</p>"+"<p>Death Cases: "+d+"</p>";
          
            document.getElementById("text").style.display="block";
            
            
        })
    }
}