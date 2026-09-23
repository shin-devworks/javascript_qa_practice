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