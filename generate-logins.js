const fs = require('fs');

const availableLoginFileNames = [
  'Plain',
  'ThirdWeb',
]

for (let fileName of availableLoginFileNames) {
  const fileContent = fs.readFileSync(`./src/components/logins/${fileName}.tsx`).toString();
  const json = {
    name: fileName,
    value: fileContent
  }
  fs.writeFileSync(`./public/${fileName}.login.json`, JSON.stringify(json), 'utf-8');
}