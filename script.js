function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

   if(
       username=="rohit"&& password=="droid123"
   ){
       alert("Log-In Succesfully");
       return false
   }
   else
   {
       alert("Log-In Failed");
   }

}