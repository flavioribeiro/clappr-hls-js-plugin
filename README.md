clappr-hls-js-plugin
==================

HLS support for [Clappr player](http://github.com/clappr/clappr) using JavaScript. We are aiming to add this plugin as a built-in feature of the player. Follow the discussion [here](https://github.com/clappr/clappr/issues/555).

![](http://www.quickmeme.com/img/8d/8d30a19413145512ad5a05c46ec0da545df5ed79e113fcf076dc03c7514eb631.jpg)

Thanks to the AWESOME work of [Guillaume du Pontavice](https://github.com/mangui)

## How to use

Import hlsjs.min.js

```javascript
<script type="text/javascript" src="http://flv.io/hlsjs/hlsjs.min.js">
</script>
```
and create Clappr Player adding the external plugin:

```javascript
var player = new Clappr.Player({
      source: "http://source_here.m3u8", 
      parentId: "#player-wrapper", 
      plugins: {'playback': [HLSJS]}
    );
```

## Demo

http://flv.io/hlsjs
