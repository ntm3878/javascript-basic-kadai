//id btnをhtmlから取得、定数に代入
const btn = document.getElementById('btn');
//id textをhtmlから取得、定数に代入
const clickText = document.getElementById('text');
//クリックされた時にイベント処理を実行する設定、クリック後2秒後に表示を変える設定
btn.addEventListener('click', () => {
  setTimeout(() => {
    clickText.textContent = 'ボタンをクリックしました'
  }, 3000);
});