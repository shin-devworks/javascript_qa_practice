# JavaScript基礎文法メモ

Pythonで学んだ内容との違いも含めて、実際に使った構文を記録します。

## 01 変数

```javascript
const expected = "訪問成功";
```

- `const`：後から別の値を代入しない変数を宣言する。
- `=`：右側の値を左側の変数に代入する。
- 文字列は `" "` で囲む。
- 文末には通常 `;` を付ける。

値を後から変更する必要がある場合は `let` を使う。

```javascript
let count = 1;
count = 2;
```

## 02 値の比較

```javascript
actual === expected
```

`===` は、値と型が同じかを比較する。一致すれば `true`、異なれば `false` になる。
代入の `=` とは役割が違う。

## 03 条件分岐

```javascript
if (actual === expected) {
  console.log("合格");
} else {
  console.log("不合格");
}
```

- `if (...)`：括弧内の条件が `true` のときに実行する。
- `else`：条件が `false` のときに実行する。
- `{ }`：実行する処理の範囲を示す。
- `console.log(...)`：ターミナルに内容を表示する。

Pythonでは `if 条件:` と字下げで処理の範囲を示すが、
JavaScriptでは条件を `( )` で囲み、処理の範囲を `{ }` で示す。


## 04 配列・オブジェクト・繰り返し

`02_check_app.js` では、複数の確認項目をまとめて扱った。

```javascript
const checks = [
  { name: "訪問判定", expected: "成功", actual: "成功" },
  { name: "御城印の表示", expected: "表示", actual: "表示" },
  { name: "同日再訪問", expected: "カウントしない", actual: "カウントしない" }
];
```

- `[]` は配列。複数の項目を順番に入れられる。
- `{}` はオブジェクト。1項目の名前、期待値、実際の値をまとめられる。
- `check.name` のように書くと、オブジェクトの値を取り出せる。

```javascript
let passed = 0;

for (const check of checks) {
  if (check.actual === check.expected) {
    passed += 1;
  }
}

console.log(`結果：${passed}/${checks.length}件 合格`);
```

- `for...of` は配列の項目を1つずつ取り出して処理する。
- `passed += 1` は、合格するたびに件数を1増やす。
- `checks.length` は、配列に入っている項目数を表す。
- `${passed}` は、バッククォートで囲んだ文字列に変数の値を入れる書き方。

### 実行して分かったこと

最初は「同日再訪問」の期待値と実際の値を変えて実行し、2/3件合格と表示された。実際の値を期待値と同じに変更して再実行すると、3/3件合格になった。

今回はコード内の値を比較した。今後はHTML・CSSで画面を作り、JavaScriptでボタン操作や表示変更を実装する。


## 05 HTMLの要素とクリックイベント

`03_button_message.html` と `03_button_message.js` では、ボタン操作に応じてWebページの表示を変更した。

### HTMLとJavaScriptをつなぐ

HTMLの要素に`id`を付けると、JavaScriptからその要素を指定できる。

```html
<p id="message">まだ確認していません</p>
<button id="checkButton">確認する</button>

<script src="03_button_message.js"></script>
```

`script`の`src`には、読み込むJavaScriptファイルの名前を書く。今回はHTMLファイルとJavaScriptファイルを同じフォルダに置いた。

### 要素を取得してクリック時の処理を登録する

```javascript
const button = document.getElementById("checkButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "確認が完了しました";
  button.textContent = "確認済み";
  button.disabled = true;
});
```

- `document.getElementById("checkButton")`：指定した`id`のHTML要素を取得する。
- `addEventListener("click", ...)`：ボタンがクリックされたときの処理を登録する。
- `textContent`：要素に表示する文字を変更する。
- `disabled = true`：ボタンを無効化し、再度押せないようにする。

### 実行して分かったこと

ブラウザでHTMLファイルを開くと初期メッセージが表示された。ボタンを押すとメッセージとボタンの文字が変わり、ボタンが無効になった。再読み込みすると初期状態に戻った。

前回までの課題はコード内の値を比較してターミナルに結果を出した。今回はHTMLの要素をJavaScriptから操作し、ブラウザ上の表示を変更した。