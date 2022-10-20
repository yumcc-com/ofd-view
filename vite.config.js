import { resolve } from 'path'

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  build: {
    // target: ['es2015'],
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'OfdView',
      fileName: 'ofd-view'
    },
    rollupOptions: {
      external: ['web-streams-polyfill', 'sm-crypto', 'jszip-utils', 'jszip', 'jsrsasign-util', 'jsrsasign', 'js-sha1', 'js-md5', 'ofd-xml-parser', 'core-js', '@lapo/asn1js'],
      output: {
        globals: {
          'web-streams-polyfill': 'web-streams-polyfill',
          'sm-crypto': 'sm-crypto',
          'jszip-utils': 'jszip-utils',
          'jszip': 'jszip',
          'jsrsasign-util': 'jsrsasign-util',
          'jsrsasign': 'jsrsasign',
          'js-sha1': 'js-sha1',
          'js-md5': 'js-md5',
          'ofd-xml-parser': 'ofd-xml-parser',
          'core-js': 'core-js',
          '@lapo/asn1js': '@lapo/asn1js'
        }
      }
    },
    // commonjsOptions: {
    //   include: [/node_modules/],
    //   ignoreDynamicRequires: true
    // }
  }
}
