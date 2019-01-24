//NAVIGATION

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.header__content').addClass('sticky');
    } else {
        $('.header__content').removeClass('sticky');
    }
});


// YANDEX

ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map('mapOne', {
          center: [34.055369, -118.210377],
          zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
  var myMap = new ymaps.Map('mapTwo', {
        center: [36.284027, -119.127742],
        zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
  var myMap = new ymaps.Map('mapThree', {
        center: [51.505503, -0.125587],
        zoom: 9
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Маленькая иконка'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.png',
          iconImageSize: [75, 79],
          iconImageOffset: [-30, -39],
      });

  myMap.geoObjects.add(myPlacemark);
}




// VIDEO 

function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();