# ts-all-in-one
인프런 강좌를 보며 확실하게 익히는 ts문법


### 1주차
```
[npm 설정 및 타입스크립트 설치]
- $ npm init
- $ npm i typescrip
```

```
[타입스크립트 설정]
- $ npx tsx --init : (tsconfig.json)생성

- tsconfig.json
/* JavaScript Support */
  Javascript 활성화! 같이 사용하도록 허용.-> "allowJs": true, /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
  // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
  // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

  /* Modules */
  원래는 commonjs로 설정되어 있는데, 리액트의 여러 모듈(import export 등)을 사용하기 위해서 변경 (최신 모듈까지 허용하려면 ES2015로 변경해도 괜찮다.)-> "module": "ES2022",    

  /* Emit */
  다른파일 불러올때 대소문자 구분해주는 설정으로  true로 해놔야 대소문자 구분하여 파일을 불러올 수 있다. -> "forceConsistentCasingInFileNames": true,   
```