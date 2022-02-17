const fs = require('fs');

const availableLoginFileNames = [
  'Mock',
  'Web3js',
  'Web3Modal',
  'ThirdWeb',
  'Moralis',
]

// keep formatting
const DefaultButtonJSX = `
    <button
      onClick={() => isConnected ? disconnect() : connect()}
    >
      { isConnected ? 'Disconnect' : 'Connect' }
    </button>
`

for (let fileName of availableLoginFileNames) {
  const fileContentWithMetaCode = fs.readFileSync(`./src/components/logins/${fileName}.tsx`).toString();

  const fileContent = fileContentWithMetaCode
    .replace(/\/\/\sREPLACE_IMPORTS((.|\n)*)\/\/\sREPLACE_IMPORTS/gm, '') // remove imports
    .replace(/\/\/\sREPLACE_BUTTON((.|\n)*)\/\/\sREPLACE_BUTTON/gm, DefaultButtonJSX) // replace button to default

  const json = {
    name: fileName,
    value: fileContent,
  }
  fs.writeFileSync(`./public/${fileName}.login.json`, JSON.stringify(json), 'utf-8');
}