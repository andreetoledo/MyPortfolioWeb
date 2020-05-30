import React, { Component } from 'react';

class HtmlToPdf extends Component {
  convertHtmlToPdf(e) {
    fetch('https://v2018.api2pdf.com/chrome/html', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '36d76f48-96c2-4dbc-9e2a-4197f04b2819'
      },
      body: JSON.stringify({html: '<p>hello world from reactjs</p>', inlinePdf: true, fileName: 'test.pdf' })
    }).then(res=>res.json())
      .then(res => console.log(res.pdf));
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.convertHtmlToPdf.bind(this)}>Generate Pdf</button>
      </div>
    );
  }
}

export default HtmlToPdf;