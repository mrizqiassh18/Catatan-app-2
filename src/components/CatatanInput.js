import React from 'react';
import PropTypes from 'prop-types';
 
class CatatanInput extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     title: '',
     body: '',
   }

   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }

 onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
    this.setState({title: '', body: ''});
  }

 render() {
   return (
    <form className='catatan-input' onSubmit={this.onSubmitEventHandler}>
    <input type="text" placeholder="Ketikan judul catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
    <textarea placeholder="Ketikan catatan di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required/>
       <button type="submit">Tambah</button>
     </form>
   )
 }
}

CatatanInput.propTypes = {
  addCatatan: PropTypes.func.isRequired,
 }
 
export default CatatanInput;