

function buildPostsList(url, id) {
  return $.get('http://localhost:3000/posts', {}, function(posts) {
    $('#posts').empty();
    posts.forEach(function(post) {
      var $div = $('<div/>', {
        'data-id': post.id,
      });
      var $par = $('<p/>', {
        text: post.text
    });
      var $sign = $('<p/>', {
        text: 'Автор:' + post.autor + ' ' + 'Дата:' + post.date
    });

    var $delete = $('<button/>', {
      text: 'Delete',
      class: 'delete',
    });
    $div.append($par);
    $div.append($sign);
    $div.append($delete);
    $div.appendTo('#posts');
  }); 
  }, 'json');
}


function buildModeratingList() {
  return $.get('http://localhost:3000/moderating', {}, function(posts) {
    $('#moderating').empty();
    posts.forEach(function(post) {
      var $div = $('<div/>', {
        'data-id': post.id,
      });
      var $par = $('<p/>', {
        text: post.text,
    });
      var $sign = $('<p/>', {
        text: 'Автор:' + post.autor + ' ' + 'Дата:' + post.date,
    });

    var $confirm = $('<button/>', {
      text: 'Confirm',
      class: 'confirm',
      'data-autor': post.autor,
      'data-date': post.date,
      'data-text': post.text,
    });

    var $reject = $('<button/>', {
      text: 'Reject',
      class: 'reject',
    });
    $div.append($par);
    $div.append($sign);
    $div.append($confirm);
    $div.append($reject);
    $div.appendTo('#moderating');
  }); 
  }, 'json');
}

(function($) {
  $(function() {
    var $posts = buildPostsList();
    var $moder = buildModeratingList();

    $('#form').on('click', '#send', function(event) {
      if($('#name').val().length >= 5)
      { if($('#text').val().length >= 10 && $('#text').val().length <= 300 ) {
        $.post('http://localhost:3000/moderating', {
          id: $moder.responseJSON.length,
          autor: $('#name').val(),
          date: Date(),
          text: $('#text').val()
          
        }, function(response) {
          $moder = buildModeratingList();
        }, 'json');
        } else {
          alert('Текст должен былть длинной от 10 до 300 символов');
        }
      event.preventDefault();
      } else {
        alert('Имя должно быть не короче 5 символов!');
      }
    });

    $('#moderating').on('click','.reject', function(event) {
      $.ajax({
        url: 'http://localhost:3000/moderating/' + $(this).closest('div').attr('data-id') ,
        type: 'DELETE',
        success: function() {
          $moder = buildModeratingList();
        }
      });
      event.preventDefault();
    });

    $('#posts').on('click','.delete', function(event) {
      $.ajax({
        url: 'http://localhost:3000/posts/' + $(this).closest('div').attr('data-id') ,
        type: 'DELETE',
        success: function() {
          $posts = buildPostsList();
        }
      });
      event.preventDefault();
    });

    $('#moderating').on('click','.confirm', function(event) {
      console.log($(this).closest('.postText').text);
      $.post('http://localhost:3000/posts', {
          id: $posts.responseJSON.length,
          autor: $(this).attr('data-autor'),
          date: $(this).attr('data-date'),
          text: $(this).attr('data-text'),
          
        }, function(response) {
          $posts = buildPostsList();
        }, 'json');
        
      $.ajax({
        url: 'http://localhost:3000/moderating/' + $(this).closest('div').attr('data-id') ,
        type: 'DELETE',
        success: function() {
          $moder = buildModeratingList();
        }
      });
      event.preventDefault();
    });

  });
})(jQuery);