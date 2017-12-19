
Styleguide One
===
> A styleguide driven approach to building a personalized css library using [TailwindCSS](https://tailwindcss.com) and [LivingCSS](https://github.com/straker/livingcss).

⚡️ **WORK IN PROGRESS** ⚡️ 

Configure you main variables in `styleguide-one.js`, modify the css files in `src/` and generate your unified css library.

## Usage

### Installation

You should first make sure that you have yarn and gulp install globally.

```shell
yarn install
```


### Generation of the css

Will generate your css library as `build/lib.css`.
```shell
gulp css
```


### Generation of the styleguide

Will generate your web styleguide in `styleguide/index.html`.
```shell
gulp styleguide
```


### Developpment mode

Any modification to a file in `src/` or to the `tailwind.js` config file will regenerate the CSS and update the styleguide.
```shell
gulp watch
```
