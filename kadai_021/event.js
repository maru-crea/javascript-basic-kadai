const btn = document.getElementById('btn');       // ボタン要素を取得
const text = document.getElementById('text');     // h2要素を取得

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000); 
});