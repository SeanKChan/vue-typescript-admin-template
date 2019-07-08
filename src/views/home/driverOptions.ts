import Cookies from 'js-cookie'

export default {
  doneBtnText: '完成',
  closeBtnText: '关闭',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  showButtons: true,
  overlayClickNext: true,
  onReset: (element: any) => {
    Cookies.set('isGuided', '1', {
      expires: 30,
      path: '',
      domain: document.domain
    })
  }
}
