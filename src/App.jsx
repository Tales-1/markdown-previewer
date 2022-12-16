import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import { marked } from "marked";
import $ from "jquery";

const defaultText = `
# h1 
## h2 

[links](https://www.freecodecamp.org) 
Here is a 

> Block Quote! 

- here is a list
- here is another list
- here is a third list 

and this is a **bold** word lol 

and this is an image 
this is some \`<span>inline text</span>\`
\`code\`

\`\`\`
{
  name:john doe,
  age:20,
  height:2m,
}
\`\`\`
 ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
});

function App() {
  const [input, setInput] = useState(defaultText);
  function handleChange(e) {
    setInput(e.target.value);
  }
  console.log(input === true);

  return (
    <div className="container">
      <div className="heading">
        <h1>Markdown Previewer</h1>
        <p>Watch your Markdown convert in real time.</p>
      </div>

      <div className="flex-container">
        <div className="editor">
        <h2 className="subheading">Editor</h2>
        <textarea
          name="story"
          typeof="text"
          id="editor"
          defaultValue={defaultText}
          rows={30}
          onChange={handleChange}
        ></textarea>
        </div>
        
        <div className="previewer">
        <h2 className="subheading">Previewer</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(input),
          }}
        ></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
