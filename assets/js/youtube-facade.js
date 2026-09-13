document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.yt-facade').forEach(function (facade) {
    facade.addEventListener('click', function () {
      var id = facade.dataset.ytId;
      var title = facade.dataset.ytTitle || 'YouTube video';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = title;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      facade.innerHTML = '';
      facade.appendChild(iframe);
    });
  });
});
