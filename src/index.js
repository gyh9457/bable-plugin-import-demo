export default function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const { node } = path
        const { libraryName } = state.opts
        if (node.source.value === libraryName) {
          const { specifiers } = node
          // 空导入，不做转换
          if (!specifiers.length) {
            return
          }
          // 转换
          const imports = []
          specifiers.forEach(spec => {
            const name = `${libraryName}/lib/${spec.imported.name}`
            const local = spec.local
            imports.push(t.importDeclaration([t.importDefaultSpecifier(local)], t.StringLiteral(name)))
            imports.push(t.importDeclaration([], t.stringLiteral(`${name}/style.css`)))
          })
          path.replaceWithMultiple(imports)
        }
      }
    }
  }
}