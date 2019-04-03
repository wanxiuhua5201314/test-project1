<template>
  <div ref="magnify" class="magnify">
    <div v-show="imgSrc!==''" class="preview-box" @mousemove="move($event)" @mouseout="zoomBlock = false" ref="previewBox">
      <img ref="magnifyImg" :src="imgSrc" alt="加载失败">
      <div v-show="imgLoaded" class="hover-box" ref="hoverBox"></div>
    </div>
    <div class="zoom-box" v-show="zoomBlock&&imgLoaded" ref="zoomBox">
      <img :src="imgSrc" alt="" ref="bigImg">
    </div>
    <!-- 正在加载遮罩 -->
    <div v-show="imgSrc!==''&&imgLoading" class="el-loading-mask" style="">
      <div class="el-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
      </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'magnify',
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    scale: {
      type: String,
      default: '3'
    },
    hoverW: {
      type: String,
      default: '100px'
    },
    hoverH: {
      type: String,
      default: '100px'
    },
    zoomW: {
      type: String,
      default: '300px'
    },
    zoomH: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      zoomBlock: false,
      imgW: null,
      imgH: null,
      imgLoading: false,
      imgLoaded: true
    }
  },
  watch: {
    imgSrc (newVal) {
      if (newVal) {
        this.imgLoad()
      }
    }
  },
  methods: {
    init () {
      this.hoverBox = this.$refs.hoverBox
      // 初始化 放大镜hover-box 的宽度和高度
      this.hoverBox.style.width = this.hoverW
      this.hoverBox.style.height = this.hoverH
      // 获取放大镜hover-box的宽度和高度
      this.hoverWidth = this.hoverBox.offsetWidth
      this.hoverHeight = this.hoverBox.offsetHeight

      // 获得previewBox的宽度和高度
      this.previewBox = this.$refs.previewBox
      this.previewWidth = this.previewBox.offsetWidth
      this.previewHeight = this.previewBox.offsetHeight

      this.zoomBox = this.$refs.zoomBox
      // 初始化 放大窗口 的宽高
      this.zoomBox.style.width = this.zoomW
      this.zoomBox.style.height = this.zoomH
      // 获得 zoomBox的宽度和高度
      this.zoomWidth = this.zoomBox.offsetWidth
      this.zoomHeight = this.zoomBox.offsetHeight

      // 先将图片安排指定比例放大，再获得 bigImg 的宽度和高度
      this.bigImg = this.$refs.bigImg
      this.bigImg.style.width = this.previewWidth * this.scale + 'px'
      this.bigImg.style.height = this.previewHeight * this.scale + 'px'
      this.imgWidth = this.bigImg.offsetWidth
      this.imgHeight = this.bigImg.offsetHeight
      // 获得页面的滚动条高度
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
    },
    offset (element) {
      let actualLeft = element.offsetLeft
      let current = element.offsetParent
      let actualTop = element.offsetTop
      let elementScrollLeft, elementScrollTop, scrolltop
      while (current !== null) {
        actualLeft += current.offsetLeft
        actualTop += current.offsetTop
        current = current.offsetParent
        // console.log(current, '========')
        if (current && current.scrollTop !== null && current.scrollTop > 0) {
          scrolltop = current.scrollTop
        }
      }
      if (document.compatMode === 'BackCompat') {
        elementScrollLeft = document.body.scrollLeft
        elementScrollTop = document.body.scrollTop
      } else {
        elementScrollLeft = document.documentElement.scrollLeft
        elementScrollTop = document.documentElement.scrollTop
      }
      return {
        offsetLeft: actualLeft - elementScrollLeft,
        offsetTop: actualTop - elementScrollTop,
        scrolltop: scrolltop
      }
    },
    move (event) {
      this.init()
      // 鼠标距离屏幕距离
      let moveX = event.clientX
      let moveY = event.clientY
      // let moveLeft = moveX
      // let moveTop = moveY
      let moveRight = document.body.scrollWidth - moveX
      let moveBottom = window.screen.availHeight - moveY
      if (moveRight < this.zoomWidth) {
        if (moveBottom < this.zoomHeight) {
          // 放大镜的显示位置
          this.zoomBox.style.left = moveX - this.zoomWidth - this.hoverWidth / 2 + 'px'
          this.zoomBox.style.bottom = moveY - this.hoverHeight / 2 + 'px'
        } else {
          // 放大镜的显示位置
          this.zoomBox.style.left = moveX - this.zoomWidth - this.hoverWidth / 2 + 'px'
          this.zoomBox.style.top = moveY + this.hoverHeight / 2 + 'px'
        }
      } else {
        // 放大镜的显示位置
        this.zoomBox.style.left = moveX + this.hoverWidth / 2 + 'px'
        this.zoomBox.style.top = moveY + this.hoverHeight / 2 + 'px'
      }

      // preview-box 距离顶部的距离
      let { offsetLeft, offsetTop, scrolltop } = this.offset(this.previewBox)
      let left = moveX - offsetLeft - this.hoverWidth / 2
      let top
      // console.log({moveX,moveY})
      // console.log({ offsetLeft, offsetTop,scrolltop });
      if (this.scroll > 0) {
        top = moveY - offsetTop - this.scroll - this.hoverHeight / 2
      } else {
        if (scrolltop) {
          top = Math.abs(moveY - (offsetTop - scrolltop) - this.hoverHeight / 2)
        } else {
          top = moveY - offsetTop - this.hoverHeight / 2
        }
      }
      // console.log({left,top})
      let maxWidth = this.previewWidth - this.hoverWidth
      let maxHeight = this.previewHeight - this.hoverHeight
      // 判断 left 和 top 的取值
      left = left < 0 ? 0 : left > maxWidth ? maxWidth : left
      top = top < 0 ? 0 : top > maxHeight ? maxHeight : top
      this.hoverBox.style.left = left + 'px'
      this.hoverBox.style.top = top + 'px'
      let percentX = left / maxWidth
      let percentY = top / maxHeight
      this.bigImg.style.left = percentX * (this.zoomWidth - this.imgWidth) + 'px'
      this.bigImg.style.top = percentY * (this.zoomHeight - this.imgHeight) + 'px'

      this.zoomBlock = true
    },
    // 图片自适应
    imgSelf () {
      let _this = this
      let fW = window.getComputedStyle(_this.$refs.magnify).width.replace('px', '') * 1
      let fH = window.getComputedStyle(_this.$refs.magnify).height.replace('px', '') * 1
      this.imgW = this.imgW ? this.imgW : window.getComputedStyle(this.$refs.magnifyImg).width.replace('px', '') * 1
      this.imgH = this.imgH ? this.imgH : window.getComputedStyle(this.$refs.magnifyImg).height.replace('px', '') * 1
      let ratio = fW / fH
      let imgRatio = this.imgW / this.imgH
      if (imgRatio > ratio) {
        this.$refs.magnifyImg.style.width = fW + 'px'
        this.$refs.magnifyImg.style.height = fW / imgRatio + 'px'
      } else {
        this.$refs.magnifyImg.style.height = fH + 'px'
        this.$refs.magnifyImg.style.width = fH * imgRatio + 'px'
      }
    },
    imgLoad () {
      // 加载图片之前加遮罩
      this.imgLoading = true
      this.imgLoaded = true
      let _this = this
      // 加载完成之后自适应图片尺寸
      this.$refs.magnifyImg.onload = function () {
        _this.imgW = null
        _this.imgH = null
        _this.imgSelf()
        // 图片自适应完成之后去除遮罩
        _this.$nextTick(function () {
          _this.imgLoading = false
        })
      }
      // 10s之后还未加载成功，显示加载失败
      setTimeout(function () {
        if (_this.imgLoading) {
          _this.imgLoading = false
          _this.imgLoaded = false
        }
      }, 10000)
    }
  },
  mounted () {
    if (this.imgSrc) this.imgLoad()
    let _this = this
    window.addEventListener('resize', function () {
      _this.imgSelf()
    })
  }
}
</script>

<style scoped>
.magnify {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview-box {
  position: relative;
  text-align: center;
  z-index: 99;
}
.preview-box:hover .hover-box {
  display: block;
}
.hover-box {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 888;
  display: none;
  background: url("../assets/hoverBox.png")
    repeat 0 0;
  cursor: move;
}
.zoom-box {
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #d8edff;
  z-index: 999;
}
.zoom-box > img {
  position: absolute;
  top: 0;
  left: 0;
}
.el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: hsla(0,0%,100%,1);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity .3s;
  height: 100%;
  width: 100%;
}
.el-loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.el-loading-spinner .circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
svg:not(:root) {
    overflow: hidden;
}
.el-loading-spinner .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90,150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}
circle {
  cx: 50;
  cy: 50;
  r: 20;
  fill: none;
}
:not(svg) {
  transform-origin: 0px 0px 0px;
}
</style>
