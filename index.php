<?php 
$streamToken = $_GET['streamToken'];
$streamAlias = $_GET['streamAlias'];
?>
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=0" />
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/noplayer.min.js"></script>
<link type="text/css" href="./css/noplayer.css" rel="stylesheet" />
<style type="text/css">
	html, body {
		padding: 0px;
		margin: 0px;
	}
</style>
<div id="player"></div>
<script type="text/javascript">
	var player;
	$(document).ready(function(){
		player = new noplayer({
			swfPath: "swf/flashlsChromeless.swf",
			source: "http://13.71.153.150:1935/<?php echo $streamAlias; ?>/<?php echo $streamToken; ?>/playlist.m3u8",
			mimeType: "application/x-mpegURL",
			maxBufferLength: 60,
			autoPlay: true,
			width: $(window).width() + "px",
			height: $(window).height() + "px",
			nokey: "U2FsdGVkX1+ORRukPNvKElPumZx/TAhPZoZ0+9ZEGG4=",
			events: {
				onReady: function() {
					console.warn("player is ready");
				},
				onPlay: function() {
					console.warn("player playing");

				},
				onPause: function() {
					console.warn("player paused");

				},
				onSeek: function(time) {
					console.warn("player is seeking");

				},
				onStop: function(evt) {
					console.warn("player stopped");

				},
				onVolumeUpdate: function(evt) {
					console.warn("player volume updated");

				},
				onTimeUpdate: function(evt) {
					console.warn("player updated");

				},
				onEnded: function() {
					console.warn("player has ended");

				},
				onVolumeUpdate: function() {
					console.warn("volume was updated")
				}
			}
		});
		player.attachTo(document.getElementById("player"));
	});
</script>
</body>
</html>
