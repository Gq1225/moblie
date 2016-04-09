var IScroll = require('../iscroll-master/build/iscroll.js');
//iScroll = new IScroll("#wrapper");
console.log(IScroll)
var myScroll;
myScroll = new IScroll('#wrapper', { bounceEasing: 'elastic', bounceTime: 1200 });
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);