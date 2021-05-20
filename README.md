# running node e2e scripts sequentially.

## input/output
checkout [action.yml](./action.yml)

## how to make execuutable javascript e2e testing code

please use [katalon recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) and [katalon2puppeteer](https://www.npmjs.com/package/katalon2puppeteer).  
store codes as `${scripts_dir}/${test_name(freely named as you want)}/index.js`.

execute scripts in your local to make reference images,  
you need to store images in a specific directory in your PJ.

example:

```sh
echo ${SCRIPTS_DIR} # is reqrequired option inherited from GithubAction.

ls ${SCRIPTS_DIR}/*/index.js
// ${SCRIPTS_DIR}/login_test/index.js
// ${SCRIPTS_DIR}/nologin_test/index.js

ls ${SCRIPTS_DIR}/capture
// ... # please store captures taken by login_test/index.js and nologin_test/index.js in advance by your local execution.
```

finally, run this action with parameters.  
please checkout [test.yml](./.github/workflows/test.yml)

### integration guide

#### for a webpage already provided

apply below lines into your github actions def yaml.
```yaml
      - id: e2e-sequential-puppeteer-action
        uses: yabe-diverta/e2e-sequential-puppeteer-action@v2
        with:
          wait_on: https://your.webpage.com
          scripts_dir: your/test/dir
```

#### for a webpage you are developping in local

apply below lines into your github actions def yaml.
```yaml
      - id: e2e-sequential-puppeteer-action
        uses: yabe-diverta/e2e-sequential-puppeteer-action@v2
        with:
          serve_cmd: npm run serve
          wait_on: http://localhost:8080
          scripts_dir: your/test/dir
```

---

## for dev

### release
- git commit
  - git add . && git commit && git push
- update version in package.json
  - npm version patch
- attach new tag as vN && vN.N.N
  - git tag vN -f
  - git tag vN.N.N
  - git push origin vN -f
  - git push origin vN.N.N
- release in [github release page](https://github.com/yabe-diverta/e2e-sequential-puppeteer-action/releases)
