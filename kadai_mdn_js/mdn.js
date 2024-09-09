const toDay = new Date();

//日付取得
const year = toDay.getFullYear();
const month = toDay.getMonth() +1;
const day = toDay.getDate();
//出力
console.log(year + '年' +  month + '月' + day + '日');