document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector("body");
  var myElement = document.createElement('ul');
  var button = document.querySelector("#btn")

  button.addEventListener('click', function(){
    $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: "GET"
  }).done(function(data){
      // myElement.innerHTML = data;
      console.log(data)
      for (i=0;i<data.candidates.length;i++){
        var list = document.createElement("li");
        list.innerText = data.candidates[i].name + " | " + data.candidates[i].votes  ;
        myElement.append(list)
      }
      document.body.append(myElement);

    })
  })




});
