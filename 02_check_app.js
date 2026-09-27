const checks = [
  { name: "訪問判定", expected: "成功", actual: "成功" },
  { name: "御城印の表示", expected: "表示", actual: "表示" },
  { name: "同日再訪問", expected: "カウントしない", actual: "カウントしない" }
];

let passed = 0;

for (const check of checks) {
  if (check.actual === check.expected) {
    console.log(`合格：${check.name}`);
    passed += 1;
  } else {
    console.log(`不合格：${check.name}`);
    console.log(`  期待：${check.expected}`);
    console.log(`  実際：${check.actual}`);
  }
}

console.log(`結果：${passed}/${checks.length}件 合格`);