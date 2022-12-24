import React from 'react';
import CatatanItemBody from './CatatanItemBody';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';
 
function CatatanItem({ title, createdAt , body, onDelete, id }) {
 return (
   <div className="catatan-item">
     <CatatanItemBody
     id={id} 
     title={title}  
     createdAt={createdAt} 
     body={body} 
     />
     <DeleteButton 
     id={id} 
     onDelete={onDelete} 
     />
   </div>
 );
}

CatatanItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete : PropTypes.func.isRequired
}


export default CatatanItem;