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
    this.scrollRefs = {
      inpRef: React.createRef(),
      previewRef: React.createRef(),
    }
    this.scrollingRef = null
    // this.startT = 0
    // this.closed = {
    //   inpRef: true,
    //   previewRef: true,
    // }
  }

  render() {
    return (
      <div className="outer_container">
        <textarea ref={this.scrollRefs.inpRef} onScroll={() => this.inpScroll('inpRef')} onChange={this.inputChange} className="edit_area" value={this.state.inputText} spellCheck="false">
        </textarea>
        <div ref={this.scrollRefs.previewRef} onScroll={() => this.prevScroll('previewRef')} id="preview" className="markdown-body" dangerouslySetInnerHTML={{__html:this.state.previewHtml }}>
        </div>
      </div>
    )
  }

  inputChange = (e) => {
    const inp = e.target.value
    const html = marked(inp)
    this.setState({ inputText: inp, previewHtml:html})
  }

  inpScroll = (ref) => {
    requestAnimationFrame(() => { 
      this.scrollingRef = ref
      const scrollDom = this.scrollRefs[ref].current
      let percent = scrollDom.scrollTop / (scrollDom.scrollHeight - scrollDom.clientHeight)
      for (const _ref in this.scrollRefs) {
        if (_ref !== ref) {
          const dom = this.scrollRefs[_ref].current
          let height = percent * (dom.scrollHeight - scrollDom.clientHeight)
          console.log(height)
          dom.scrollTo(0, height)
        }
      }
    })
    
    
  }

  prevScroll = () => { 

  }

  scroll = (ref) => {
    console.log(ref)
    const T = new Date().getTime()
    if (T - this.startT > 200) {
      this.closed[ref] = false
      this.startT = T
    } else { 
      return
    }
    const scrollDom = this.scrollRefs[ref].current
    let percent = scrollDom.scrollTop / (scrollDom.scrollHeight - scrollDom.clientHeight)
    for (const _ref in this.scrollRefs) {
      if (_ref !== ref) {
        console.log(_ref)
        const dom = this.scrollRefs[_ref].current
        let height = percent * dom.scrollHeight
        dom.scrollTo(0, height)
      }
    }
    // console.log(percent)
    // console.dir(scrollDom)
    // console.log(scrollDom.scrollHeight)
  }
}

export default Edit