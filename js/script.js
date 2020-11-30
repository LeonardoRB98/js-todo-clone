$(document).ready(
  function() {

    // var source = document.getElementById("entry-template").innerHTML;
    var source = $('#entry-template').html();

    var template = Handlebars.compile(source);

    var context = [
      {
        todo : "chimare Davide",
      },
      {
        todo : "portare il cane fuori"
      },
      {
        todo : "fare la spesa"
      }
    ];

    for (var i = 0; i < context.length; i++) {
      var html = template(context[i]);
      $('#list').append(html)
    }



    // var html = template(context);
    // console.log(html);
    // $('#list').append(html)




  }
);
