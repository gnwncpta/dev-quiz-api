# Dev Quiz API

Dev quiz API which using Bun.js which faster than Node.js & Deno.js
Back End Repository

If you are new with Bun.js please consider to read the docs <a href="https://bun.sh">here</a>.

### - Start Project
- Open `dev-quiz-api` dir on terminal
- Install dependencies `bun install`
- run `bun app.js`

### Install Dependencies on Bun ?
- run `bun install`


### - Environment Variables
- `API_URL` is referred to API server url so make sure to change to your server url

> ## Fix chalk error
if you found this error on you console
```bash
error: Could not resolve: "#ansi-styles". Maybe you need to "bun install"?
import ansiStyles from '#ansi-styles';
                       ^
...
error: Could not resolve: "#supports-color". Maybe you need to "bun install"?
import supportsColor from '#supports-color';
                          ^
```
To solve this problem you need to remove the `#` in the beginning on `/node_modules/chalk/source/index.js` import code

### Tech Stacks:
<div style="margin-top: 20px; display: flex;">
  <img src='https://svgshare.com/i/ixn.svg' alt="Bun JS" height="36px" />
  <img src='https://svgshare.com/i/iMA.svg' alt="React JS" height="36px" />
  <img src='https://svgshare.com/i/iLM.svg' alt="Tailwind CSS" height="36px" />
  <img src='https://svgshare.com/i/iLU.svg' title='Javascript' height="36px" />
</div>