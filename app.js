
//add li with checkbox and input form that automatically adds text when
//press enter
//in class todo-list, console hi when press enter
//<input type="text" class="user-input-title" placeholder="Enter the Title">
//<textarea class="user-input-body" placeholder="Enter the body of text"></textarea>



$(document).ready(function() {

  // $(".todo-list").on("keypress", function(event) {
  //   if(event.which === 13) {
  //     console.log('hi')
  //   }
  // });

  $(".add-todo-button").on("click", function() {
    let addTodoText = $(".todo-list-input").val();
    let inputKey = 'todo';

    if(addTodoText === "") {
      return;
     } 

    localStorage.setItem(inputKey, addTodoText);
    let newLi = '<li class="new-todo" data-storage-key="' + inputKey + '"><input type="checkbox" class="checkbox">' + " " + '<span class="todo-text">' + addTodoText + '</span><button type="button" class="delete-todos-button">Delete</button></li>';
    $(".todo-list-items").append(newLi);
    localStorage.removeItem($(".todo-list-input").val()); 
    $(".todo-list-input").val(""); 

    // $(".delete-todos-button").on("click", function () {
    //   $(this).closest('li').fadeOut('slow', function(){
    //     $(this).remove();
    //   });

     $(".checkbox").on("click", function() {
        var thisClass = $(this).siblings(".todo-text")
        thisClass.replaceWith(thisClass.text().strike())

       //console.log(.closest($(".new-todo .todo-text").text()))
     });

     //function to toggle list
  });
 });



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





















