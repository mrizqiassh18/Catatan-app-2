import React from 'react';
import CatatanItem from './CatatanItem';
import PropTypes from 'prop-types';
 
function CatatanList({ catatans, onDelete }) {
 return (
  catatans.length > 0 ?
    <div className="catatan-list">
      {
        catatans.map((catatan) => (
          <CatatanItem 
          key={catatan.id}
          id={catatan.id}
          onDelete={onDelete}
          {...catatan} />
        ))
      }
    </div> :
    <p className="catatan-list__kosong">Tidak ada catatan</p>
 );
}

CatatanList.propTypes = {
  catatans: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default CatatanList;