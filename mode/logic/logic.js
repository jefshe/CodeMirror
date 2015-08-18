/* Definition of syntax highlighting for our Logic expressions.  Relies on simple.js plugin.
 */

CodeMirror.defineSimpleMode("logic", {
    // The start state contains the rules that are intially used
    start: [
      // The regex matches the token, the token property contains the type
      { regex: /"(?:[^\\]|\\.)*?"/, token: "string" },
      { regex: /'(?:[^\\]|\\.)*?"/, token: "string" },
      { regex: /\[(?:[^\\]|\\.)*?\]/, token: "string" },
      // Rules are matched in the order in which they appear, so there is
      // no ambiguity between this one and the one above
      {
          regex: /(?:and|or|&|not)\b/i,
          token: "keyword"
      },
      { regex: /NaN/i, token: "atom" },
      {
          regex: /[+-]?\d+(\.\d+)?/,  // Copied from Logic.grammar
          token: "number"
      },
      { // date
          regex: /\d{2,4}-\d{2}-\d{2}( +\d{1,2}:\d{1,2}(:\d{1,2}(\.\d+)?)?( +(AM|PM))?)?/i,  // Copied from Logic.grammar
          token: "number"
      },
      { regex: /[<>=-]+/, token: "operator" },
      { regex: /\/\/.*/, token: "comment" },
      // indent and dedent properties guide autoindentation
      { regex: /[\{\[\(]/, indent: true },
      { regex: /[\}\]\)]/, dedent: true },
      { regex: /[A-Z@][A-Z‘’“”0-9@#_$.]*/i, token: "variable" }  // Copied from Logic.grammar, but JavaScript does not yet support unicode character classes
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
        lineComment: "//"
    }
});
