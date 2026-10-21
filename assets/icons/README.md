# Portfolio icons

`sprite.svg` contains the 15 SVG icons used throughout the portfolio, including
project cards. Icons come from [Tabler Icons](https://github.com/tabler/tabler-icons)
at revision `a4ce1404bc6d24d3c365afe7b258d6bf6f48d62d` and are distributed under the
[MIT license](LICENSE-tabler.txt).

Use a symbol with a decorative, non-focusable SVG. Keep accessible labels on the
containing link or button:

```html
<svg class="icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <use href="assets/icons/sprite.svg#github"></use>
</svg>
```

The sprite keeps the portfolio's existing icon names. Source names that differ:

| Sprite symbol | Tabler source |
| --- | --- |
| linkedin | brand-linkedin |
| github | brand-github |
| graduation-cap | school |
| bot | robot |
| smartphone | device-mobile |
| x-circle | circle-x |

The other symbols use their original Tabler names. The favicon files are separate
browser tab icons and remain in ICO format.
