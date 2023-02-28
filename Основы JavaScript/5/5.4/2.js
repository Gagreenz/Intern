let styles = ["Джаз","Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.floor(styles.length / 2)] = "классика"
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Регги");
styles.unshift("Рэп");
console.log(styles);

