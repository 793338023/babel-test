module.exports = ({ types: t }) => {
  let isOp = false;
  return {
    visitor: {
      ExpressionStatement() {
        console.log("ExpressionStatement");
      },
      Identifier(path) {
        console.log(path.node.name);
        if (path.node.name === "__SIGN__") {
          path.remove();
          isOp = true;
        }
      },
      ImportDeclaration() {
        console.log("ImportDeclaration", isOp);
      },
      IfStatement(path) {
        path.replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(t.identifier("vvv"), t.StringLiteral("xx")),
          ])
        );
      },
      ObjectExpression(path) {
        const sign = path.get("Identifier");

        console.log("ObjectExpression", isOp);

        if (isOp && path.parentPath.type === "ExportDefaultDeclaration") {
          path.replaceWith(t.callExpression(t.identifier("abc"), [path.node]));
        }
      },
    },
  };
};
