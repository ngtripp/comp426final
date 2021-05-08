import { withFirebase } from './Firebase';  

$(function () {
    $("#loginButton").on("click", login);
  
  });
  
  function login() {
    const $message = $('#message');
  
    let username = $("#userarea").val();
    let userpassword = $("#passwordarea").val();
    let data = { "username": username, "password": userpassword };
    setTimeout(function() {
      
      $.ajax({
        url: 'http://localhost:3000/login',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
          window.location = 'index.html';
        },
        error: function (data) {
          console.log(data.status);
          if (data.status == 200) {
            $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
            setTimeout(function () {
              window.location = '/';
            }, 2000);
          } else {
            console.log(data);
            $message.html(`<span class="has-text-danger">Something went wrong and you were not logged in. We got the error "${data.responseText}"</span>`);
    
          }
        }
      });
    }, 300)
  }