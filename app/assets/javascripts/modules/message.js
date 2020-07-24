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
  
  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MainChat__messages').append(html);
      $('.MainChat__messages').animate({ scrollTop: $('.MainChat__messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.Send-btn').prop('disabled',false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Send-btn').prop('disabled',false);
    });
  });
});
