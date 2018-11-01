const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: false,
    audio: [
      {
        name: '嘘',
        artist: '艾索',
        url: '/music/嘘-艾索.mp3',
        lrc: '/lrc/嘘-艾索.lrc',
        cover: 'images/嘘-艾索.jpg',
      },
      {
      	name: '晚安喵',
	      artist: '艾索',
	      url: '/music/晚安喵-艾索.mp3',
	      lrc: '/lrc/晚安喵-艾索.lrc',
	      cover: 'images/晚安喵-艾索.jpg'
      }
    ]
});
