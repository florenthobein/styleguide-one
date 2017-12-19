Styleguide One
===
> A styleguide driven approach to building a personalized css library using [TailwindCSS](https://tailwindcss.com) and [LivingCSS](https://github.com/straker/livingcss).

⚡️ **WORK IN PROGRESS** ⚡️ 

Configure your main variables in `tailwind.js`, modify the css files in `css/` and generate your unified css library.

## Example

See [an example of styleguide output](https://florenthobein.github.io/styleguide-one/).

## Usage

### Installation

You should first make sure that **yarn** and **gulp** are globally installed on your system.

```shell
yarn install
```

### Generation of the library

Define your constants (colors, fonts, spaces, etc...) in the [`tailwind.js`](https://github.com/florenthobein/styleguide-one/blob/master/tailwind.js) file, following the [tailwind configuration principles](https://tailwindcss.com/docs/configuration).

Then generate your library with:

```shell
# will generate your css library as `build/lib.css`
gulp css
```


### Generation of the styleguide

You can modify the CSS comments in every `css/*.css` file, which will have an impact on the generated styleguide. [Learn more about styleguide documentation](https://github.com/straker/livingcss)

Then generate the stylguide with:

```shell
# you can then access your web styleguide at `docs/index.html`
gulp styleguide
```


### Development mode

Any modification to a file in `css/` or to the `tailwind.js` config file will regenerate your css library and update the styleguide.
```shell
gulp watch
```

## Credits

- [Github of TailwindCSS](https://github.com/tailwindcss/tailwindcss)
- [Github of LivingCSS](https://github.com/straker/livingcss)

## License

[MIT](https://opensource.org/licenses/MIT)
