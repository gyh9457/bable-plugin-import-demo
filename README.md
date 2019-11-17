### 说明
babel plugin demo

实现模块的按需引入:

``` js
  import { A, B, C as D } from 'foo'
```

转换为:

``` js
  var _A = require("foo/lib/A");
  require("foo/lib/A/style.css");
  var _B = require("foo/lib/B");
  require("foo/lib/B/style.css");
  var _C = require("foo/lib/C");
  require("foo/lib/C/style.css");
```

### 运行
执行 `npm run test` ，通过 `snapshots` 查看转换结果