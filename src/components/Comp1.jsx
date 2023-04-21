import React from 'react'

const Comp1 = () => {
  return (
      <div style={{
          textAlign: "center", marginTop: "100px",boxShadow:"0 0 10px black",width:"50vw" }}>
          <h1>Topics Covered</h1>
          <p>The following is a list of all the topics we cover in MDN learning area. </p>
          <a href="/">Getting started with the web</a>
          <p>Provides a practical introduction to web development for complete beginners.</p>
          <a href="/">HTML--Structuring the web</a>
          <p>HTML is the language that we use to structure the different parts of our content and define that their meaning or purpose is . this topics teaches HTML in details.</p>
          <a href="/">CSS--Styling the web</a>
          <p>CSS is the language that we use to control our web content's style and layout,as well as adding behaviour like animation. this topics provides comprehensivve coverage of CSS.</p>
    </div>
  )
}

export default Comp1