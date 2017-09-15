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
					reportStatus("ready");
				},
				onPlay: function() {
					reportStatus("on_play");

				},
				onPause: function() {
					reportStatus("on_pause");

				},
				onSeek: function(time) {
					reportStatus("on_seek");

				},
				onStop: function(evt) {
					reportStatus("on_stop");

				},
				onVolumeUpdate: function(evt) {
					reportStatus("on_vol_update");

				},
				onTimeUpdate: function(evt) {
					reportStatus("playing");

				},
				onEnded: function() {
					reportStatus("on_ended");

				},
				onVolumeUpdate: function() {
					reportStatus("volume_update");
				},
				onError: function(){
					reportStatus("error");
				}
			}
		});
		player.attachTo(document.getElementById("player"));
	});

	// MARK: report status
	function reportStatus(status){
		console.warn("CURRENT STATUS IS : " + status);
		window.location = 'player.app.com://localhost?status=' + status
	}
</script>
</body>
</html>

