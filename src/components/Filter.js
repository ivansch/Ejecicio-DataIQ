import React,{Component} from 'react'
import Search from './Search'
import { personas } from '../personas.json';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText:'hello'
    }
  }
  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }
  render() {

    return (
      <div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
         />
      </div>
    )
  }
}
export default Filter
