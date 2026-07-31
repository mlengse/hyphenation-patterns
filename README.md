# Hyphenation patterns for Hypher

Hyphenation language pattern files for [Hypher](https://github.com/bramstein/hypher), one file per language.

## Browser

Prebuilt language patterns are available in `dist/browser` for direct use with Hypher in a browser:

```html
<script src="hypher.js"></script>
<script src="dist/browser/id.js"></script>
<script>
  var h = new Hypher(Hypher.languages['id']);
  h.hyphenateText('pemerintahan'); // pe-me-rin-tah-an
</script>
```

## npm packages

Generated npm packages (one per language) are built into `dist/npm`:

```sh
make all
```

To publish them you need to be a maintainer of the packages.

## Tests

The Indonesian pattern is validated against a KBBI (Kamus Besar Bahasa Indonesia) test set:

```sh
make test
```

`test/validate-id.js` runs the engine over `test/data/id-test.json` and fails (non-zero exit) if accuracy drops below the `THRESHOLD` (default 90%) or if `dist/browser/id.js` has drifted from `patterns/id.js`.

## Indonesian pattern (`id`)

`patterns/id.js` is a Hypher conversion of `hyph-id.tex` v1.3 (1997) by Jörg Knappen & Terry Mart (GPL-2.0), with exceptions validated against KBBI to fix systematic prefix/suffix errors (`ber-`/`per-`/`peng-`/`meng-`, `-an`/`-kan`, `-ia` sequences, etc.). This file is the single source of truth; the `id` pattern bundled inside the pinned `hypher` dependency is not used.

## License

Language patterns are copyrighted by their respective creators and licensed per their upstream `hyph-utf8` license (GPL, LGPL, LPPL, ...). See [LICENSE](LICENSE) for details. The Hypher engine is BSD-3-Clause.
