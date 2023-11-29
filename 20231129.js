/* 객체 숫자, 문자열, 불 */
// 객체 자료형
let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(true);

// 자료형을 출력합니다.
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

/* toFixed( ) */
// 변수를 선언합니다.
let number1 = 273.5210332;

// 출력합니다.
console.log(number1.toFixed(1));
console.log(number1.toFixed(4));

/* 올바른 String 객체의 메소드 사용 */
// 변수를 선언합니다.
let string1 = 'abcdefg';

// 출력합니다.
string = string1.toUpperCase();
console.log(string);

/* indexOf() */
// 변수를 선언합니다.
let string2 = '안녕하세요. 좋은 아침입니다.';

// 문자열 내부에 "아침"이라는 문자열이 있는지 확인합니다.
if (string2.indexOf('아침') >= 0) {
    console.log('좋은 아침이에요...!');
}

/* 시간 더하기 */
// 현재 시간을 구합니다.
let date = new Date();

// 출력1
console.log(date);

date.setFullYear(date.getFullYear() * 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 3);

// 출력2
console.log(date);

/* Array 객체의 메소드 */
let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

// 배열이 요소를 꺼냅니다.
let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array)

// 배열에 요소를 넣습니다.
array.push(popped);
array.push({
    name:'사과',
    price: 2000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(array);