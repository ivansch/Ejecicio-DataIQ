import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      confirmado: 'false'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      nombre: '',
      apellido: '',
      email: '',
      confirmado: 'false'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
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
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
