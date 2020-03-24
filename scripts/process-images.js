let glob = require('glob');
let fs = require('fs');
const prettier = require('prettier');
var readJson = (path, cb) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err) cb(err);
    else cb(JSON.parse(data));
  });
};

// options is optional
glob('assets/**/*', {}, (er, files) => {
  let pieces = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    if (
      !file.endsWith('.png') &&
      !file.endsWith('.jpg') &&
      !file.endsWith('.json') &&
      !file.endsWith('.svg') &&
      !file.endsWith('.jpeg')
    )
      continue;
    let piece = [
      file,
      ...file
        .replace('.png', '')
        .replace('.jpeg', '')
        .replace('.jpg', '')
        .replace('.json', '')
        .replace('.svg', '')
        .replace('assets/', '')
        .split('/'),
    ];
    pieces.push(piece);
  }

  let assets = {};
  for (let p = 0; p < pieces.length; p++) {
    let piece = pieces[p];
    let curPiece = assets;
    for (let i = 1; i < piece.length; i++) {
      let item = piece[i].replace(/-/g, '_').replace(/ /g, '_');
      if (i === piece.length - 1) {
        curPiece[item] = `require('../${piece[0]}')`;
      } else {
        if (!curPiece[item]) {
          curPiece[item] = {};
        }
        curPiece = curPiece[item];
      }
    }
  }

  let result = JSON.stringify(assets, null, '    ').replace(/"require\('(.*)'\)"/g, (_, value) => {
    return "require('" + value + "') as number";
  });

  readJson('../.prettierrc', p => {
    p.parser = 'typescript';
    let prettyResult = prettier.format('export const Assets = ' + result, p);
    fs.writeFileSync('src/assets.ts', prettyResult);
    console.log(`Updated assets.ts with ${pieces.length} images.`);
  });
});
