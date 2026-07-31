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

`patterns/id.js` is generated from KBBI (Kamus Besar Bahasa Indonesia) 2025 data via the orthos pipeline in [`id-hyphenation-patterns`](../id-hyphenation-patterns): 11,443 patterns + 6,916 exception words (leftmin 2, rightmin 2). It is a plain-CJS variant of the `id` pattern bundled inside the pinned `hypher` dependency; both share the same KBBI 2025 single source of truth.

## License

Language patterns are copyrighted by their respective creators and licensed per their upstream `hyph-utf8` license (GPL, LGPL, LPPL, ...). See [LICENSE](LICENSE) for details. The Hypher engine is BSD-3-Clause.
