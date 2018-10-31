import React, {Component} from 'react'
import Filter from './Filter'

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value
    this.props.filterUpdate(val)
  }

  render() {
    console.log('filtertText value', this.props.filterText);
    return (
      <header>
        <form>
          <input
            type="text"
            ref={ (value) => { this.myValue = value } }
            placeholder="Buscar..."
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </header>
    );

  }
}
export default Search
