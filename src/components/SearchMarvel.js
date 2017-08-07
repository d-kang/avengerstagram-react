import React, { Component } from 'react';
import api from 'marvel-api';
import { publicKey, privateKey } from '../config/marvel'

class SearchMarvel extends Component {

  getInput(e) {
    e.preventDefault();
    console.log({api})
    var q = this.input.value;

    let marvel = api.createClient({ publicKey, privateKey });
    var tern = q === 'spiderman' ? 'spider-man' : q
    marvel.characters.findByName(tern)
      .then(res => {
        console.log('res', JSON.stringify(res, null, 2));
        this.props.renderQuery(res)
      })
      .fail(console.error)
      .done();
    this.input.value = '';
  }

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



  render() {
    return (
      <div>
        <form onSubmit={this.getInput.bind(this)} action="">
          <input ref={(input) => this.input = input} type="text"/>
          <button>Search Marvel API</button>
        </form>
      </div>
    );
  }
}

export default SearchMarvel;



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
