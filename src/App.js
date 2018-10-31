import React, { Component } from 'react';
import logo from './usu.png';
import search from './search.png';
import './App.css';
import Filter from './components/Filter';

// data
import { personas } from './personas.json';
// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super() ;
    this.state = {
      personas
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  constructorfilter(props) {
    this.setState({
      filterText:'hello'
    })
  }

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }


  removeTodo(index) {
    alert("¿Seguro que quiere eliminar este cliente?");
    this.setState({
      personas: this.state.personas.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      personas: [...this.state.personas, todo]
    })
  }

  render() {
    console.log(this.state);
    console.log('filterText state from parent component', this.state.filterText);
    // const { personas, filterText } = this.props;
    const personas = this.state.personas
    // .filter( function(personas) {
    // return personas.name
    // })
    .map((personas, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center mt-2">
              <h4>{personas.nombre+" "+personas.apellido}</h4>
              <span className="badge badge-pill badge-danger ml-2">
                {personas.confirmado.toString()}
              </span>
            </div>
            <div className="card-body">
              {personas.email}
            </div>
            <div className="card-footer">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Modificar
              </button>
              <button
                className="btn btn-danger ml-3"
                onClick={this.removeTodo.bind(this, i)}>
                Borrar
              </button>
              {/* MODAL */}
              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Modicar</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form onSubmit={this.handleSubmit} className="card-body">
                        <div className="form-group">
                          <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="apellido"
                            className="form-control"
                            value={this.state.apellido}
                            onChange={this.handleInputChange}
                            placeholder="Apellido"
                            />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                          <select
                              name="priority"
                              className="form-control"
                              value={this.state.confirmado}
                              onChange={this.handleInputChange}
                            >
                            <option>false</option>
                            <option>true</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Clientes
            <span className="badge badge-pill badge-light ml-2">
              {this.state.personas.length}
            </span>
          </a>
          <Filter />
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
                  <img src={logo} className="App-logo mb-4" alt="logo" />
                    <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {personas}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
