const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: false,
    audio: [
      {
        name: '嘘',
        artist: '艾索',
        url: 'http://music.163.com/song/media/outer/url?id=33891982.mp3',
        lrc: '/lrc/嘘-艾索.lrc',
        cover: 'http://p4.music.126.net/MjXuHJB9kDPu7X45aUs5GQ==/14457478393642798.jpg?param=640y300',
      },
      {
      	name: '晚安喵',
	      artist: '艾索',
	      url: 'http://music.163.com/song/media/outer/url?id=28875230.mp3',
	      lrc: '/lrc/晚安喵-艾索.lrc',
	      cover: 'http://p1.music.126.net/aQhLC9kR4Z7iiwIuynXnQA==/14402502812253006.jpg?param=90y90'
      }
    ]
});
