
//create objects to store list items and methods
//create reusable functions


$(document).ready(function() {
  //todo list

  var date = new Date().toString().slice(0, 15)
  $(".date-text").append(date)

  $(".todo-list-input").on("keypress", function(event) {
    if(event.which === 13) {
      let addTodoText = $(".todo-list-input").val();
      let inputKey = 'todo';

      if(addTodoText === "") {
        return;
      }
       // '<input type="checkbox" class="checkbox">'
        localStorage.setItem(inputKey, addTodoText);
        let newLi = '<li class="new-todo" data-storage-key="' + inputKey + '"><span class="todo-text">' + addTodoText + '</span><button type="button" class="delete-todos-button">Delete</button><button type="button" class="edit-todos-button">Edit</button></li>';

        if($(".new-todo .todo-text").css("text-decoration-line") == "line-through") {
          var closestLi = $(".todo-text").closest("li")
          $(".new-todo").insertBefore(closestLi);
          return;
        }
          $(".todo-list-items").append(newLi);


        localStorage.removeItem($(".todo-list-input").val());
        $(".todo-list-input").val("");
       }

       $(function() {
         $(".todo-list-items").sortable();
         $(".todo-list-items").disableSelection();
       });

       if($(".new-todo"))

  $(".delete-todos-button").unbind().click(function() {
    var confirmDelete = confirm("Delete Item?")
    if(confirmDelete) {
      $(this).closest("li").fadeOut("slow", function(){
      $(this).remove();
        return;
      });
    }
        return false;
  });

  $(".todo-text").unbind().dblclick (function() { //unbind so function only urns once, look up unbind()
    if($(this).css("text-decoration-line") == "line-through") {
      $(this).css("text-decoration-line", "none");
        return; //have to return function or else nothing happens
    }
      $(this).css("text-decoration-line", "line-through");
      var thisLi = $(this).closest("li");
        function moveToBottom() {
          $(thisLi).appendTo(".todo-list-items");
        };

        return setTimeout(moveToBottom, 500);
    });
  });

});

//THIS WEEK LIST

$(document).ready(function() {

  $(".this-week-input").on("keypress", function(event) {
    if(event.which === 13) {
      let addThisWeekInput = $(".this-week-input").val();
      let thisWeekInputKey = 'this week';

      if(addThisWeekInput === "") {
        return;
      }
        localStorage.setItem(thisWeekInputKey, addThisWeekInput);
        let newLi = '<li class="this-week-todo" data-storage-key="' + thisWeekInputKey + '"><span class="this-week-text">' + addThisWeekInput + '</span><button type="button" class="delete-this-week-button">Delete</button></li>';

        if($(".this-week-todo .this-week-text").css("text-decoration-line") == "line-through") {
          var closestLi = $(".this-week-text").closest("li")
          $(".this-week-todo").insertBefore(closestLi);
          return;
        }
          $(".this-week-list-ul").append(newLi);

        localStorage.removeItem($("this-week-list-ul").val());
        $(".this-week-input").val("");
       }

       $(function() {
         $(".this-week-list-ul").sortable();
         $(".this-week-list-ul").disableSelection();
       });

  $(".delete-this-week-button").unbind().click(function() {
    var confirmDelete = confirm("Delete Item?")
    if(confirmDelete) {
      $(this).closest("li").fadeOut("slow", function(){
      $(this).remove();
        return;
      });
    }
        return false;
  });

  $(".this-week-text").unbind().dblclick (function() { //unbind so function only urns once, look up unbind()
    if($(this).css("text-decoration-line") == "line-through") {
      $(this).css("text-decoration-line", "none");
        return; //have to return function or else nothing happens
    }
      $(this).css("text-decoration-line", "line-through");
      var thisLi = $(this).closest("li");
        function moveToBottom() {
          $(thisLi).appendTo(".this-week-list-ul");
        };

         setTimeout(moveToBottom, 500);
    });
  });

  // $(".calendar").datepicker({
  //       inline: true,
  //       firstDay: 0,
  //       showOtherMonths: true,
  //       dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  //   });
});

//NEW LISTS PLUS CREATED

$(document).ready(function() {

  $(".new-list-input").on("click", function() {
    var thisList = $(this).parent().siblings(".life-list-wrapper").children(".new-list-ul")

    $(this).on("keypress", function(event) {
      if(event.which === 13) {
        let addNewListText = $(this).val();
        let newListInputKey = 'new list';

        if(addNewListText === "") {
          return;
         }
         // '<input type="checkbox" class="checkbox">'
          localStorage.setItem(newListInputKey, addNewListText);
          let newLi = '<li class="new-list-item" data-storage-key="' + newListInputKey + '"><span class="new-list-text">' + addNewListText + '</span><button type="button" class="delete-list-item-button">Delete</button></li>';

          if($(".new-list-item .new-list-text").css("text-decoration-line") == "line-through") {
            var closestLi = $(".new-list-text").closest("li")
            $("new-list-item").insertBefore(closestLi);
            return;
          }
            $(thisList).append(newLi)

          localStorage.removeItem($(this).val());
          $(this).val("");

          $(function() {
            $(".new-list-ul").sortable();
            $(".new-list-ul").disableSelection();

          });
        }
    $(".delete-list-item-button").unbind().click(function() {
      var confirmDelete = confirm("Delete Item?");
      if(confirmDelete) {
        $(this).closest("li").fadeOut("slow", function(){
          $(this).remove();
          return;
        });
      }
        return false;
    });

    $(".new-list-text").unbind().dblclick(function() { //unbind so function only urns once, look up unbind()
      if($(this).css("text-decoration-line") == "line-through") {
        $(this).css("text-decoration-line", "none");
        return; //have to return function or else nothing happens
      }
        $(this).css("text-decoration-line", "line-through");
        var thisLi = $(this).closest("li");
        var thisUl = $(this).closest("ul");

          function moveToBottom() {
            $(thisLi).appendTo(thisUl)
          };
           setTimeout(moveToBottom, 500);
    });
  });
  });
  //END NEW LISTS


//START CREATED LISTS
  $(".add-new-list-button").on("click", function() {
    let addNewListText = $(this).siblings().val();
    let newInputKey = 'new list';

    if(addNewListText === "") {
      return;
    }
      localStorage.setItem(newInputKey, addNewListText);
      let newDiv = '<div class="new-list-title" data-storage-key="' + newInputKey + '"><span class="new-list-title-text">' + addNewListText + '</div>';
      let newList = '<div class="new-list-created">' + newDiv + '<div class="created-input-wrapper"><input type="text" class="new-list-created-input" placeholder="add item..."></div><div class="created-ul-wrapper"><ul class="created-ul"></ul></div></div>'


      $("#container2").append(newList);
      $(newList).prepend(newDiv); //prepend to new list

      $(function() {
        $(".created-ul").sortable();
        $(".created-ul").disableSelection();
      });

      localStorage.removeItem($(this).siblings().val());;
      $(this).siblings().val("");


  //REDO THIS, CAN'T CREATE AN NEW UL EVERY CLICK
$(".new-list-created-input").unbind().click(function() {
    var thisList = $(this).parent().siblings(".created-ul-wrapper").children();
    $(this).on("keypress", function(event) {
      if(event.which === 13) {
        let addNewListText = $(this).val();
        let newListInputKey = 'new list';

        if(addNewListText === "") {
          return;
         }
         // '<input type="checkbox" class="checkbox">'
          localStorage.setItem(newListInputKey, addNewListText);
          let newLi = '<li class="new-list-item" data-storage-key="' + newListInputKey + '"><span class="new-list-text">' + addNewListText + '</span><button type="button" class="delete-list-item-button">Delete</button></li>';


          //MAYBE PUT ALL LI'S IN ARRAY AND FILTER OUT ONES WITH LINE THROUGH
          if($(".new-list-item .new-list-text").css("text-decoration-line") == "line-through") {
            var closestLi = $(".new-list-text").closest("li")
            $("new-list-item").insertBefore(closestLi);
            return;
          }
            $(thisList).append(newLi)

          localStorage.removeItem($(this).val());
          $(this).val("");


        }
    $(".delete-list-item-button").unbind().click(function() {
      var confirmDelete = confirm("Delete Item?");
      if(confirmDelete) {
        $(this).closest("li").fadeOut("slow", function(){
          $(this).remove();
          return;
        });
      }
        return false;
    });

    $(".new-list-text").unbind().dblclick (function() { //unbind so function only urns once, look up unbind()
      if($(this).css("text-decoration-line") == "line-through") {
        $(this).css("text-decoration-line", "none");
        return; //have to return function or else nothing happens
      }
        $(this).css("text-decoration-line", "line-through");
        var thisLi = $(this).closest("li");
        var thisUl = $(this).closest("ul");

          function moveToBottom() {
            $(thisLi).appendTo(thisUl)
          };
           setTimeout(moveToBottom, 500);
    });

  //NEW LIST CREATED RESPONSIVE
});
});
});
});/




$(document).ready(function() {
  $(".add-new-habit-input").on("keypress", function(event) {
    if(event.which === 13) {
      let addNewHabitText = $(this).val();
      let newHabitInputKey = 'new habit';

      if(addNewHabitText === "") {
        return;
      }

      localStorage.setItem(newHabitInputKey, addNewHabitText);

      $(".habits-title").text(addNewHabitText);

      localStorage.removeItem($(this).val());
        $(this).val("");


      for(let i = 0; i < 31; i++) {
        $(".habits").append('<div class="days"><div class="days-value">' + i + '</div></div>')
      }

    }



  $(".days").on("click", function() {
      let num = Number($(this).text());
      let daysVal = $(this).val();
      let numInputKey = 'num key'

      localStorage.setItem(numInputKey, daysVal);

      if(typeof num === 'number') {
        $(this).children().detach();
        $(this).text("X")
        return;
      }
        $(this).text(daysVal)
    });
  });
});



















