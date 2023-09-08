import React from "react";
import ReactDOM from "react-dom/client"

const content = React.createElement('div',{id:"parent"},
[React.createElement('h1',{},"React Content"),
    React.createElement('h2',{},"Welcome")
]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(content)

// npm - it manages our packages/dependencies
/* package.json is the configuration for npm*/
// node_modules acts as a DB for our dependencies/packages
