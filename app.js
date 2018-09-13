
//add li with checkbox and input form that automatically adds text when
//press enter
//in class todo-list, console hi when press enter
//<input type="text" class="user-input-title" placeholder="Enter the Title">
//<textarea class="user-input-body" placeholder="Enter the body of text"></textarea>

//create objects to store list items and methods
//create reusable functions



$(document).ready(function() {

  $(".todo-list-input").on("keypress", function(event) {
    if(event.which === 13) {
      let addTodoText = $(".todo-list-input").val();
      let inputKey = 'todo';

      if(addTodoText === "") {
        return;
      }
       // '<input type="checkbox" class="checkbox">'
        localStorage.setItem(inputKey, addTodoText);
        let newLi = '<li class="new-todo" data-storage-key="' + inputKey + '"><span class="todo-text">' + addTodoText + '</span><button type="button" class="delete-todos-button">Delete</button></li>';

        if($(".new-todo .todo-text").css("text-decoration-line") == "line-through") {
          var closestLi = $(".todo-text").closest("li")
          $("new-todo").insertBefore(closestLi);
          return;
        }
          $(".todo-list-items").append(newLi);

        localStorage.removeItem($(".todo-list-input").val());
        $(".todo-list-input").val("");
       }

       $(function() {
         $( ".todo-list-items" ).sortable();
         $( ".todo-list-items" ).disableSelection();
       });

  $(".delete-todos-button").unbind().click(function() {
    var confirmDelete = confirm("Delete Item?")
    if(confirmDelete) {
      $(this).closest('li').fadeOut('slow', function(){
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
$(document).ready(function() {

  function addItem() { //life-list1


  };

  function deleteItem(list) {
    $("delete-list-item-button").unbind().click(function() {
      var confirmDelete = confirm("Delete Item?")
      if(confirmDelete) {
        $(this).closest("li").fadeOut("slow", function(){
          $(this).remove();
          return;
        });
      }
        return false;
    });
  };

  function checkItem(list) {
    $("new-list-text").unbind().dblclick (function() { //unbind so function only urns once, look up unbind()
      if($(this).css("text-decoration-line") == "line-through") {
        $(this).css("text-decoration-line", "none");
        return; //have to return function or else nothing happens
      }
        $(this).css("text-decoration-line", "line-through");
        var thisLi = $(this).closest("li");

          function moveToBottom() {
            $(thisLi).appendTo(".new-list-ul")
          };
           return setTimeout(moveToBottom, 500);
    });
  };

  function moveItem(list) {

  };

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
     });


  })



});//document.ready end


      //console.log($(this).closest("parent").parent())



  // addToList.find(closest list) {
  //   list.append(addItem())
  // }

  // deletebutton.find(closest list) {

  // }












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

















