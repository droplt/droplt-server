module.exports = {
  '*': ['prettier --write'],
  '*.ts': ['eslint --fix'],
  'package.json': ['sort-package-json'],
}
