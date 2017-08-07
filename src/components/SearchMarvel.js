import React, { Component } from 'react';
import api from 'marvel-api';
import { publicKey, privateKey } from '../config/marvel'

class SearchMarvel extends Component {
  getInput(e) {
    e.preventDefault();
    // console.log({api})
    var q = this.input.value;

    let marvel = api.createClient({ publicKey, privateKey });
    var tern = q === 'spiderman' ? 'spider-man' : q
    marvel.characters.findByName(tern)
      .then(res => {
        // console.log('res', JSON.stringify(res, null, 2));
        this.props.renderQuery(res)
      })
      .fail(console.error)
      .done();
    this.input.value = '';
  }
  render() {

    return (
      <form onSubmit={this.getInput.bind(this)} action="/users" method="POST">
        <input name="name" ref={(input) => this.input = input} type="text"/>
        <button type="submit" >Search Marvel API</button>
      </form> 
    );
  }
}

export default SearchMarvel;

{/* <form
  onSubmit={this.getInput.bind(this)}
  action="/users"
  method="POST"
>
            <label htmlFor="name">Names</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
              ref={(input) => this.input = input}
            />
          <button type="submit" className="btn btn-default">Submit</button>
        </form> */}



{/*  */}
  // getInput(e) {
  //   e.preventDefault();
  //   var q = this.input.value;
  //
  //   let marvel = api.createClient({ publicKey, privateKey });
  //   // var tern = q === 'spiderman' ? 'spider-man' : q
  //   // marvel.characters.findByName(tern)
  //   //   .then(res => {
  //   //     console.log('res', JSON.stringify(res, null, 2));
  //   //     this.props.renderQuery(res)
  //   //   })
  //   //   .fail(console.error)
  //   //   .done();
  //   // this.input.value = '';
  //   marvel.characters.findAll(100)
  // .then(data => {
  //   console.log('data', JSON.stringify(data, null, 2));
  //
  // })
  // .fail(console.error)
  // .done();
  // }


// getInput(e) {
//   e.preventDefault();
//   var q = this.input.value;
//
//   let marvel = api.createClient({ publicKey, privateKey });
//   // var tern = q === 'spiderman' ? 'spider-man' : q
//   // marvel.characters.findByName(tern)
//   //   .then(res => {
//   //     console.log('res', JSON.stringify(res, null, 2));
//   //     this.props.renderQuery(res)
//   //   })
//   //   .fail(console.error)
//   //   .done();
//   // this.input.value = '';
//   marvel.characters.findAll()
// .then(data => {
//   console.log('data', JSON.stringify(data, null, 2));
//
// })
// .fail(console.error)
// .done();
// }
