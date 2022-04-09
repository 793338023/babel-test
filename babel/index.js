module.exports = (babel) => {
  const { types: t } = babel;
  return {
    pre(state) {
      this.isOp = false;
    },
    post(state) {
      this.isOp = null;
    },
    visitor: {
      BlockStatement: {
        enter(path) {
          console.log(path);
        },
        exit(path) {
          console.log(path);
        }
      },
      JSXIdentifier(path) {
        console.log(path.node.name);
      },
      ExpressionStatement(path, state) {

        console.log("ExpressionStatement");
      },
      Identifier(path) {
        console.log(path.node.name);
        if (path.node.name === "__SIGN__") {
          path.remove();
          this.isOp = true;
        }
      },
      ImportDeclaration() {
        console.log("ImportDeclaration", this.isOp);
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

        console.log("ObjectExpression", this.isOp);

        if (this.isOp && path.parentPath.type === "ExportDefaultDeclaration") {
          path.replaceWith(t.callExpression(t.identifier("abc"), [path.node]));
        }
      },
      FunctionDeclaration(path) {
        t.removeComments(path)
        // console.log(path.node.leadingComments);
      },
    },
  };
};
