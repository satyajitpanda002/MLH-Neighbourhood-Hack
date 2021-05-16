
var x=0;

function count()
{
    x++;
    document.getElementById("head").innerHTML="U have selected "+x+" items";
}
function order()
{  if(x==0)
    {
        alert("please add some items to cart");
    }
    else
    alert(x+ " items are ordered... Thank you!!!!");
}
console.log("hello world");

