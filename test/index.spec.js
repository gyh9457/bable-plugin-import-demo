import { transformSync, createConfigItem } from '@babel/core'
import plugin from '../src'

const example = `import { A, B, C as D } from 'foo'`

it('plugin test', () => {
  const { code } = transformSync(example, {
    plugins: [[plugin, { libraryName: 'foo' }]]
  })
  expect(code).toMatchSnapshot()
}) 