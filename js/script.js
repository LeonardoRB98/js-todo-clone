$(document).ready(
  function() {

    // var source = document.getElementById("entry-template").innerHTML;

    var source = $('#entry-template').html();

    var template = Handlebars.compile(source);
    // creo array bidimensionale contenete gli li
    var context = [
      {
    // chiave : "valore"
        todo : "chimare Davide",
      },
      {
        todo : "portare il cane fuori"
      },
      {
        todo : "fare la spesa"
      }
    ];

    // ciclo for dove navigo tutto l'array context
    for (var i = 0; i < context.length; i++) {
      // inizializzo a variabil html e gli assegno il valore context[i]
      var html = template(context[i]);
      // prendo l'elemento con id list e aggiungo il contenuto di context e lo stampo nell'html
      $('#list').append(html)
    }

    // prendo l'elemento html di input e gli assegno la una funzione alla pressione del tasto enter (13)
    $('input').keydown(function(event) {
      // console.log(event.which);  //debug per codice tasti
      // se viene premuto il tasto invio
      if (event.which == 13) {
        // creo una variabile e gli assegno il valore degli elementi con attributo name = add-to-list
        var newItem = $('[name = "add-to-list"]').val();
        console.log(newItem);
        // ri-inizializzo la variabile/oggetto context assegnando la stessa chiave data precedentemente todo
        // alla chiave todo assegno il valore di newItem
        var context =
        {
          todo: newItem
        }
        // reinizializzo la var html egli assegno il valore di context aggiunto sopra
        var html = template(context);
        // stampo nell'htm nell'elemento con id list
        $('#list').append(html)
        $(this).val('');
      }

    }
    );
    var button = $('button').click(
      function() {
        if ($('input').val() == '') {
          alert('inserisci del testo')
        } else {
          var newItem = $('[name = "add-to-list"]').val();
          var context =
          {
            todo: newItem
          }
          var html = template(context);
          $('#list').append(html)
          $('input').val('');
        }
      }
    );


    // prendo come riferimento il documet ed al click dell'elemento
    $(document).on('click','.delete',
    function() {
      // con classe delete rimuovo dall'html il parente di delete (li)
      $(this).parent().remove();
    }
    );
  }
);
