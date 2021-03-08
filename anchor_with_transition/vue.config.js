const pathRoot = process.env.NODE_ENV === 'production' ? 'http://nmdap.udn.com.tw/test/anchorwithtransition/' : './';

module.exports = {
  publicPath: pathRoot,
  filenameHashing: false,
  pages: {
    index: {
       entry: "src/main.js",
       template: "public/index.html",
       filename: "index.html",
       pageUrl: pathRoot,
    }
  },
};