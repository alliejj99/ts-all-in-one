/**
 *  기본 문법 타이핑 방법
 */
const a: string = '5'
const b: number = 5
const c: boolean = true;
const d: undefined = undefined
const e: null = null;
const f: any = 'All True' // 어떠한; 타입구조가 와도 true를 반환
const g: true = true;

/**
 *  함수 타입스크립트 타이핑 방법
 */

/* 함수 add는 x와 y값을 숫자 타입으로 값을 받고 결과값도 숫자 타입으로 반환한다.*/
function add(x: number, y: number): number {
  return x + y;
}


/* type지정 화살표 함수 */
type add2Type = (x: number, y: number) => number;
const add2: add2Type = (x, y) => x + y;

/* interface 정의 함수 */
interface add3Interface {
  (x: number, y: number): number;
}

const add3: add3Interface = (x, y) => x + y;


/**
 *  배열 타이핑 방법
 */

const arr1: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456]; // 제네릭 '<>'
const arr4: [number, number, string] = [123, 456, 'hello']; // 튜플: 길이가 고정된 배열

/**
 *  객체 타이핑 방법
 */

const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };