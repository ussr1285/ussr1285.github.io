[ussr1285.github.io](https://ussr1285.github.io/)
블로그입니다.

나 자신에게 인수인계: 따로 빼놓은 blog 폴더(글)를 프로젝트에 넣고 빌드해야 오류가 안납니다.

라이브러리 업데이트하기(선택).
이 글 참고 -> [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
```bash
$ ncu -u
```

라이브러리 설치하기.
```bash
$ npm install -g gatsby-cli
$ npm install
```

테스트
```bash
$ gatsby develop -H 0.0.0.0
```

글 올리기
```bash
$ npm run deploy
```

[많고 자세한 명령어는 공식 치트시트](https://www.gatsbyjs.com/docs/cheat-sheet/)
