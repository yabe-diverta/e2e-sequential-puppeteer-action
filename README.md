# running node e2e scripts sequentially.

## input/output
checkout [action.yml](./action.yml)

## how to make execuutable javascript e2e testing code

please use [katalon recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) and [katalon2puppeteer](https://www.npmjs.com/package/katalon2puppeteer).  
store codes with `*.test.js` naming,  
modify generated codes.

execute scripts in your local to make reference images,  
you need to store images in a specific directory in your PJ.

example:

```sh
ls test/e2e | grep .test.js
// login.e2e.test.js
// nologin.e2e.test.js

ls test/e2e/capture
// login.json_000_command%3Dopen%2Ctarget%3Dhttp%3A%2F%2Flocalhost%3A8080%2Fmypage%2Fmail%2F%2Cvalue%3D.png
// login.json_002_command%3Dclick%2Ctarget%3Dlink%3D%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%2Cvalue%3D.png
// login.json_003_command%3Dclick%2Ctarget%3Dlink%3D%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B%2Cvalue%3D.png
// ...
```

finally, run this action with parameters.  
please checkout [test.yml](./.github/workflows/test.yml)
