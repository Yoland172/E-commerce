const esbuild = require('esbuild');
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin');
const alias = require('esbuild-plugin-alias');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const greenColorEscape = '\x1b[36m%s\x1b[0m';
const yellowColorEscape = '\x1b[33m%s\x1b[0m';

const isProd = process.env.NODE_ENV === 'production';

const defineEnv = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.API_SERVER_URL': JSON.stringify(process.env.API_SERVER_URL)
};

const buildOptions = {
  entryPoints: ['./src/index.tsx'],
  outdir: 'dist',
  bundle: true,
  minify: isProd,
  sourcemap: !isProd,
  define: defineEnv,
  plugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: postcssModules({ basedir: 'src'})
    }),
    sassPlugin({ 
      filter: /\.scss$/, 
      type: 'css', 
      loadPaths: ['./src/styles'] 
    }),
    alias({
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@api': path.resolve(__dirname, 'src/api/'),
    })
  ],
  loader: {
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
    '.svg': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.gif': 'file',
  }
}

const servingOptions = {
  servedir: 'dist',
  port: 3000,
  host: 'localhost'
}

if (isProd)
{
  esbuild.build(buildOptions)
    .then(() => fs.copyFileSync('index.esbuild.html', 'dist/index.html'))
    .then(() => console.log(greenColorEscape, 'Esbuild compiled successfully 🚀'))
    .catch(() => process.exit(1));
} 
else {
  esbuild.context(buildOptions)
  .then(ctx => {
    if(!fs.existsSync('dist')) {
      fs.mkdirSync('dist/');
    }
    ctx.serve(servingOptions);
    console.log(yellowColorEscape, 'Esbuild compiled successfully 🚀');
    console.log(greenColorEscape, `Started serving directory ${servingOptions.servedir} at ${servingOptions.host}:${servingOptions.port} 👀`) 
  })
}