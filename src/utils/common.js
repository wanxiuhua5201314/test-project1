
/*  函数防抖 */
export function debounce (fn, delay) {
  // 记录上一次的延时器
  let timer = null
  return function () {
    let args = arguments
    let that = this
    // 清除上一次延时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}
/**
 * 函数节流
 */
export function throttle (fn, delay) {
  let timer
  return function () {
    let args = arguments
    let that = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(that, args)
      }, delay)
    }
  }
}
