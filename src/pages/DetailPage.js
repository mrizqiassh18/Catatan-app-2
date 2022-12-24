import React from 'react';
import CatatanDetail from '../components/CatatanDetail';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteNote, getNote } from '../utils/api';
import NavigationDetail from '../components/NavigationDetail';

function DetailPageWrapper() {
  const {id} = useParams();
  const navigate = useNavigate()

  function homeNavigate() {
    navigate('/')
  }
  return <DetailPage id={id} navigate={homeNavigate}/>
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: null,
      initializing: true,
    }
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
        return {
            catatan: data,
            initializing: false,
          }
        })
    }
  
  async onDeleteHandler(id) {
    await deleteNote(id);

    const { navigate } = this.props;
    navigate('/');

  }

  render() {
    if (this.state.catatan === null) {
      return <p>Catatan Tidak Ditemukan!</p>
    }
    if (this.state.catatan) {
      return (
        <section>
          <NavigationDetail />
          <CatatanDetail {...this.state.catatan} onDelete={this.onDeleteHandler} />
        </section>
      );
    } 
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;