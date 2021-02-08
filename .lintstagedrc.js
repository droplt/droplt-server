module.exports = {
  '*.json': ['prettier --write'],
  '*.ts': ['eslint --fix', 'prettier --write'],
  'package.json': ['sort-package-json'],
}
