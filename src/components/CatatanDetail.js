import React from 'react';
import { showFormattedDate } from "../utils/data";
import PropTypes from 'prop-types';
 
function CatatanDetail({ title, createdAt , body, onDelete, id }) {
 return (
  <div className="catatan-item__detail">
    <h3>{title}</h3>
    <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
    <p>{body}</p>
    <button className='catatan-item__delete' onClick={() => onDelete(id)}>Hapus</button>
</div>

 );
}

CatatanDetail.protoTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete : PropTypes.func.isRequired
}

export default CatatanDetail;