$(function(){
  function buildHTML(message){
    if ( message.image ){
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="main-space">
          <div class="main-items">
            <div class="main-items__create-at">
              <div class="user-name">
                ${message.user_name}
              </div>
              <div class="timestamp">
                ${message.created_at}
              </div>
            </div>
            <div class="main-items__message">
              <p class="Message__content">
                ${message.message}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>
        </div>
      </div>`
    return html;
    } else{
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="main-space">
          <div class="main-items">
            <div class="main-items__create-at">
              <div class="user-name">
                ${message.user_name}
              </div>
              <div class="timestamp">
                ${message.created_at}
              </div>
            </div>
            <div class="main-items__message">
              <p class="Message__content">
                ${message.message}
              </p>
            </div>
          </div>
        </div>
      </div>`
    return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.MainChat__messages').append(insertHTML);
        $('.MainChat__messages').animate({ scrollTop: $('.MainChat__messages')[0].scrollHeight});
        
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});