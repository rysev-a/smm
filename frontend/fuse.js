const {
  FuseBox,
  WebIndexPlugin,
  CSSPlugin,
  ImageBase64Plugin,
} = require('fuse-box');

const TsTransformInferno = require('ts-transform-inferno').default;

const fuse = FuseBox.init({
  useTypescriptCompiler: true,
  sourceMaps: { project: true, vendor: true, inline: true },
  debug: 'true',
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: 'src/assets/index.html' }),
    CSSPlugin(),
    ImageBase64Plugin(),
  ],
  transformers: {
    before: [TsTransformInferno()],
  },
});

fuse.dev({
  fallback: 'index.html',
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    },
  },
});
fuse
  .bundle('app')
  .instructions(' > app/index.tsx')
  .hmr()
  .watch();

fuse.run();
