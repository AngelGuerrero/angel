document.addEventListener('DOMContentLoaded', function() {
  var text = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j',
    'h', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', '#', '$', '%', '&', '/',
    '(', ')', '=', '¡', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '0',
  ]
  var presentation = document.getElementById('presentation');
  var target = document.getElementById('target')
  var column = new Array(25);
  var counter = 0;
  var elements = [];
  var classesLoaded = false;
  var time = 0;

  /**
   * Create the columns for put the text inside
   *
   * @return {void}
   */
  function createColumns()
  {
    for (var i = 0; i < column.length; i++)
    {
      column[i] = document.createElement('div');
      column[i].classList.add('column');

      while (counter <= 50)
      {
        var span = document.createElement('span');
        elements.push(span);

        var letter = document.createTextNode(text[Math.floor(Math.random() * text.length)]);
        span.appendChild(letter);
        column[i].appendChild(span);
        counter++;
      }
      counter = 0;

      target.appendChild(column[i]);
    }
  }


  /**
   * Add the classes to the letters of the columns
   *
   * @return {void}
   */
  function addClasses()
  {
    var i = 0;
    for (; i < elements.length; i++)
    {
      time = i * 5;

      (function(element) {

        setTimeout(function() {
          element.classList.add('fall');
          classesLoaded = true;
        }, time);

      })(elements[Math.floor(Math.random() * elements.length)]);

    }

  }



  /**
   * If is not there a localStorage,
   * load the presentation, else, just hide...
   */
  if ( ! localStorage.getItem('1') )
  {
    createColumns();
    addClasses();

    var columns = document.getElementById('target').childNodes;

    setTimeout(function(){
      presentation.style.display = "none";
      localStorage.setItem('1', 'Presentation showed');
    }, time + 10000);
  }
  else
  {
    presentation.style.display = "none";
  }

});
