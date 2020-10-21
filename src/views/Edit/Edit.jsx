import React from 'react';
import './Edit.css'
import './md.css'
import marked from 'marked'

class Edit extends React.Component{

  constructor() {
    super()
    this.state = {
      inputText: '',
      previewHtml:null
    }
  }

  render() {
    return (
      <div className="outer_container">
        <textarea onChange={this.inputChange} className="edit_area" value={this.state.inputText} spellCheck="false">
        </textarea>
        <div id="preview" className="markdown-body" dangerouslySetInnerHTML={{__html:this.state.previewHtml }}>
        </div>
      </div>
    )
  }

  inputChange = (e) => {
    const inp = e.target.value
    const html = marked(inp)
    this.setState({ inputText: inp, previewHtml:html}, () => { console.log(this.state) })
  }
}

export default Edit