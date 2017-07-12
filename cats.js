document.addEventListener("DOMContentLoaded", function() {
  var summonCats = document.querySelector('.summon-cats');

  summonCats.addEventListener('click', function(event) {
    $.ajax({
      url:      'http://bitkittens.herokuapp.com/cats.json',
      method:   'GET',
      dataType: 'json',
    }) .done(function(data) {
      console.log(data);
      var catBox = document.querySelectorAll('.cat-box');
      for (var i = 0; i < catBox.length; i++) {
        var catImgSrc = data.cats[i].photo;
        var imgTag = document.createElement('img');
        imgTag.src = catImgSrc;
        catBox[i].append(imgTag);
      }

    })
  });

});
