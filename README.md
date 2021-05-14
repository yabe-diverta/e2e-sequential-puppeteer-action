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
// ... # please store many captures taken by login_test/index.js and nologin_test/index.js in advance by your local execution.
```

finally, run this action with parameters.  
please checkout [test.yml](./.github/workflows/test.yml)
