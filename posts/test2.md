`React + marked + highlight.js

**Code Sample:**

```javascript
import marked from "marked";

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return require("highlight.js").highlightAuto(code, ["html", "javascript"])
      .value;
  },
});
```
