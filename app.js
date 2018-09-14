
//create objects to store list items and methods
//create reusable functions



$(document).ready(function() {
  //todo list

  // $("body").droppable({
  //   drop: function (event, ui) {
  //     if ($("#bdy img").length == 0) {
  //       $("#bdy").html("");
  //     }
  //     ui.draggable.addClass("dropped");
  //       $("#bdy").append(ui.draggable);
  //     }
  // });

  var date = new Date().toString().slice(0, 15)
  $(".date").append(date)

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
          console.log($(".new-todo .todo-text").css("text-decoration-line"))
          var closestLi = $(".todo-text").closest("li")
          $(".new-todo").insertBefore(closestLi);
          return;
        }
          $(".todo-list-items").append(newLi);
          // if($(".new-todo .todo-text").css("text-decoration-line") === "line-through") {
          //   var linedLi = $(this).parent().parent().siblings(".wrapper").children()
          //   console.log(linedLi)
          //   $(".todo-list-items").append($(this))
          // }

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

  // $(".todo-text").on("click", function() {

  //   let savedTextDiv = $(this)

  //     function replaceTodo() {
  //       $(savedTextDiv).replaceWith('<input type="text" class="replace-todo-input">');
  //       $(".replace-todo-input").on("keypress", function(event) {
  //     var savedInput = $(this)
  //     let replaceInputVal = '<span class="todo-text">' + $(this).val() + '</span>'
  //      if(event.which === 13) {
  //        if($(replaceInputVal) === "") {
  //          $(savedInput).replaceWith(savedTextDiv);
  //          return;
  //        }
  //         $(savedInput).replaceWith(replaceInputVal);
  //         return;
  //      }
  //     });
  //     }

  //     setTimeout(replaceTodo, 300)
  // });
  });

  // $(".calendar").datepicker({
  //       inline: true,
  //       firstDay: 0,
  //       showOtherMonths: true,
  //       dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  //   });
});

$(document).ready(function() {
  //this week list

  $(".this-week-input").on("keypress", function(event) {
    if(event.which === 13) {
      let addThisWeekInput = $(".this-week-input").val();
      let thisWeekInputKey = 'this week';

      if(addThisWeekInput === "") {
        return;
      }
       // '<input type="checkbox" class="checkbox">'
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

        return setTimeout(moveToBottom, 500);
    });
  });

  // $(".calendar").datepicker({
  //       inline: true,
  //       firstDay: 0,
  //       showOtherMonths: true,
  //       dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  //   });
});

$(document).ready(function() {
  //new lists

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
           return setTimeout(moveToBottom, 500);
    });
    });
  });

  $(".add-new-list-button").on("click", function() {
    let addNewListText = $(this).siblings().val();
    let newInputKey = 'new list';

    if(addNewListText === "") {
      return;
    }
      localStorage.setItem(newInputKey, addNewListText);
      let newDiv = '<div class="new-list-title" data-storage-key="' + newInputKey + '"><span class="new-list-title-text">' + addNewListText + '</div>';
      let newList = '<div class="new-list-created"><input type="text" class="new-list-created-input" placeholder="add item..."></div>'

      $("#container2").append(newList);
      $(".new-list-created").prepend(newDiv); //prepend to new list

      localStorage.removeItem($(this).siblings().val());;
      $(this).siblings().val("");


  });

  //when add list button clicked
    //if there is no text in list title, return fucntion
    //else, add new list


});//document.ready end

$(document).ready(function() {

  $(".days").on("click", function() {
      if($(this).text()) {
        $(this).empty();
        return;
      }
        $(this).text("X")
  })

});






    // $(".new-todo").on("dblclick", function() {
    //   $(this).css("highlight")
    //   $(".todo-list-items").prepend(this)
    //   return;
    // })




    //  $(".checkbox").on("click", function() {
    //   let currentTodo = $(this).siblings(".todo-text");
    //     if($(this).prop("checked")) {
    //        $(currentTodo).css("text-decoration-line", "line-through");
    //        var thisLi = $(this);
    //        function moveToBottom() {
    //          $(thisLi).closest('li').appendTo(".todo-list-items")
    //        };
    //        setTimeout(moveToBottom, 500);

    //     }  else {
    //       $(currentTodo).css("text-decoration-line", "none");
    //     }
    //       return;
    // });



// $(document).ready(function() {

//   $(".new-list-input").on("keypress", function(event) {
//     if(event.which === 13) {
//       let addNewListText = $(".new-list-input").val();
//       let newListInputKey = 'new list';

//       if(addNewListText === "") {
//         return;
//        }
//        // '<input type="checkbox" class="checkbox">'
//         localStorage.setItem(newListInputKey, addNewListText);
//         let newLi = '<li class="new-list-item" data-storage-key="' + newListInputKey + '"><span class="new-list-text">' + addNewListText + '</span><button type="button" class="delete-list-item-button">Delete</button></li>';

//         if($(".new-list-item .new-list-text").css("text-decoration-line") == "line-through") {
//           var closestLi = $(".new-list-text").closest("li")
//           $("new-list-item").insertBefore(closestLi);
//           return;
//         }
//           $(".new-list-ul").append(newLi);

//         localStorage.removeItem($(".new-list-input").val());
//         $(".new-list-input").val("");
//        }

//        $(function() {
//         $(".new-list-ul").sortable();
//         $(".new-list-ul").disableSelection();
//          });

//     $("delete-list-item-button").unbind().click(function() {
//           var confirmDelete = confirm("Delete Item?")
//           if(confirmDelete) {
//             $(this).closest('li').fadeOut('slow', function(){
//               $(this).remove();
//               return;
//             });
//           }
//            return false;
//         });

//     $("new-list-text").unbind().dblclick (function() { //unbind so function only urns once, look up unbind()
//       if($(this).css("text-decoration-line") == "line-through") {
//         $(this).css("text-decoration-line", "none");
//         return; //have to return function or else nothing happens
//       }
//         $(this).css("text-decoration-line", "line-through");
//         var thisLi = $(this).closest("li");
//           function moveToBottom() {
//             $(thisLi).appendTo(".new-list-ul")
//           };
//            return setTimeout(moveToBottom, 500);
//     });










    //  $(".checkbox").on("click", function() {
    //   let currentTodo = $(this).siblings(".todo-text");
    //     if($(this).prop("checked")) {
    //        $(currentTodo).css("text-decoration-line", "line-through");
    //        var thisLi = $(this);
    //        function moveToBottom() {
    //          $(thisLi).closest('li').appendTo(".todo-list-items")
    //        };
    //        setTimeout(moveToBottom, 500);

    //     }  else {
    //       $(currentTodo).css("text-decoration-line", "none");
    //     }
    //       return;
    // });




//   $(".add-text-btn").on("click", function(){

//     // store values
//     let inputKey = $(".user-input-title").val();
//     let inputValue = $(".user-input-body").val();

//     // clear values
//     $(".user-input-title").val("");
//     $(".user-input-body").val("");

//     console.log(inputKey, inputValue);

//     localStorage.setItem(inputKey, inputValue);
//     // data-
//     let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
//     $(".display").html(itemHtml);
//     //console.log(localStorage);
//     // how can we delegate this event to the outer html node?
//     // https://learn.jquery.com/events/event-delegation/

//     $(".display-item").on("click", function(e){
//       // plop the key:value back into the input boxes

//       // get the values from the the divs?
//       console.log("key=> ", e.target.dataset.storageKey); // user-input-title
//       localStorage.getItem(e.target.dataset.storageKey); // user-input-body

//       // set those values in the form fields
//       $(".user-input-title").val(e.target.dataset.storageKey);
//       $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
//     });

//   });

//    // TODO add back in later
//    // $(".user-input").on("keyup", function(){
//    //   let inputValue = $(".user-input").val();
//    //   localStorage.setItem("testStorage", inputValue);
//    //   $(".display").text(localStorage.getItem("testStorage"));
//    // });

//    $(".del-text-btn").on("click", function() {
//      alert('item deleted? check the console'); // maybe change to a window.confirm
//      localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
//      $(".user-input-title").val("");
//      $(".user-input-body").val("");
//      // clearing display? what if I have multiple items?
//      // after item is removed from local storage, redisplay items from local storage
//      // refresh from storage?
//    });


//    // iterative approach to adding items
//    // store data as stringified array of objects
//    // store data with individual keys
//   // how do we get keys? research Object.keys

// });



//$(".add-todo-button").on("click", function() {
  //   let addTodoText = $(".todo-list-input").val();
  //   let inputKey = 'todo';

  //   if(addTodoText === "") {
  //     return;
  //    }

  //   localStorage.setItem(inputKey, addTodoText);
  //   let newLi = '<li class="new-todo" data-storage-key="' + inputKey + '"><input type="checkbox" class="checkbox">' + " " + '<span class="todo-text">' + addTodoText + '</span><button type="button" class="delete-todos-button">Delete</button></li>';
  //   $(".todo-list-items").append(newLi);
  //   localStorage.removeItem($(".todo-list-input").val());
  //   $(".todo-list-input").val("");

  //   // $(".delete-todos-button").on("click", function () {
  //   //   $(this).closest('li').fadeOut('slow', function(){
  //   //     $(this).remove();
  //   //   });

  //    $(".checkbox").on("click", function() {
  //       var thisClass = $(this).siblings(".todo-text")
  //       thisClass.replaceWith(thisClass.text().strike())

  //      //console.log(.closest($(".new-todo .todo-text").text()))
  //    });

  //    //function to toggle list
  // });

















