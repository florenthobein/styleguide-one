Styleguide One
===
> A styleguide driven approach to building a personalized css library using [TailwindCSS](https://tailwindcss.com) and [LivingCSS](https://github.com/straker/livingcss).

⚡️ **WORK IN PROGRESS** ⚡️ 

Configure your main variables in `tailwind.js`, modify the css files in `css/` and generate your unified css library.

## Usage

### Installation

You should first make sure that **yarn** and **gulp** are globally installed on your system.

```shell
yarn install
```


### Generation of the library

```shell
# will generate your css library as `build/lib.css`
gulp css
```


### Generation of the styleguide

```shell
# you can then access your web styleguide at `docs/index.html`
gulp styleguide
```


### Developpment mode

Any modification to a file in `css/` or to the `tailwind.js` config file will regenerate your css library and update the styleguide.
```shell
gulp watch
```

## Credits

- [Github of TailwindCSS](https://github.com/tailwindcss/tailwindcss)
- [Github of LivingCSS](https://github.com/straker/livingcss)

## License

[MIT](https://opensource.org/licenses/MIT)
