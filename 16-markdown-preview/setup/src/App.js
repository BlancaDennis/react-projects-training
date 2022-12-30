import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const exampleText = `
# Lorem ipsum 
## Lorem ipsum
### Lorem ipsum
#### Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
[Lorem ipsum link](https:https://es.lipsum.com/)`


function App() {
  const [markdown, setMarkdown] = useState(exampleText);

  return (
    <main>
      <section className='markdown' >
        <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}/>
        <article className='result' >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
