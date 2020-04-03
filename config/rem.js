(function () {
  function a() {
    var b = document.documentElement.clientWidth;
    var c = b / (1920/20); //这里也表示设置1920分辨率下，fontSize是20px;
    document.getElementsByTagName("html")[0].style.fontSize = c + "px"//根据分辨率的大小 ，设置不同的fontSize，以适应不同的分辨率(因为浏览器在渲染时，实际渲染出来的样式是 如 2rem*fontSize ==实际的大小（px)
  }
  a();
  window.onresize = a//监听改变页面尺寸大小
})();
