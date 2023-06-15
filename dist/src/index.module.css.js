
const digest = '0ada6cf5828e56e666672dc618f396f41bc790d73fa4d179c24ee12f3fa3cc83';
const css = `._LoadingWheel_112a7_1 {
  border-radius: 50%;
  border-style: solid;
  border-right-color: transparent !important;
  animation-name: _spin_112a7_1;
  animation-iteration-count: infinite;
}

@keyframes _spin_112a7_1 {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"LoadingWheel":"_LoadingWheel_112a7_1","loadingWheel":"_LoadingWheel_112a7_1","spin":"_spin_112a7_1"};
export { css, digest };
  