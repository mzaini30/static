# Static

Simple SSG

## Prepare

```bash
npm i -g pnpm
```

## Download & Install

```bash
pnpx degit mzaini30/static static
cd static/
pnpm i
```

## Templating

Pakai Nunjucks

Letakkan file-file Nunjucks di `src/`. Sedangkan, file-file lainnya di `static/`

## Styling

Pakai [Windi](https://windicss.org/)

## Reactive

Pakai [Alpine](https://github.com/alpinejs/alpine)

## Offline Mode

Pas build

## Developing

```bash
pnpm run dev
```

## Publish

```bash
pnpm run build
```

Hasilnya: folder `_site/`
