
module.exports = ({ types: t }) => {
  return {
    visitor: {
      IfStatement(path) {
        path.replaceWith(t.variableDeclaration('const', [t.variableDeclarator(t.identifier("vvv"), t.StringLiteral('xx'))]))
      }
    }
  }
}