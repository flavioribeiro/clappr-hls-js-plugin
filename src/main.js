var HTML5VideoPlayback = require('html5_video')

class HLSJS extends HTML5VideoPlayback {
  get name() { return 'hlsjs' }
  get attributes() { return {'width': '100%', 'height': '100%'} }
  render() { return this }
  durationChange() {}

  constructor(options) {
      super(options)
      this.embedHls()
  }

  embedHls() {
      var script = document.createElement('script')
      script.setAttribute("type", "text/javascript")
      script.setAttribute("async", "async")
      script.setAttribute("src", "http://streambox.fr/mse/hls.js/dist/hls.js")
      script.onload = () => this.bootstrap()
      document.body.appendChild(script)
  }

  bootstrap() {
      this.hls = new Hls()
      this.hls.on(Hls.Events.MSE_ATTACHED, () => this.hls.loadSource(this.options.source))
      this.hls.attachVideo(this.el)
  }
}

HLSJS.canPlay = function(resource) {
  var resourceParts = resource.split('?')[0].match(/.*\.(.*)$/) || []
  var isHls = !!(resourceParts.length > 1 && resourceParts[1] === 'm3u8')
  return !!(window.MediaSource && MediaSource.isSupportedType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"') && isHls)
}

module.exports = window.HLSJS = HLSJS;
