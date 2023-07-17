import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';

const VoucherItem = (props) => {
  const dispatch = useDispatch();

  const accountInfo = localStorage.getItem('accountinfo');
  const account = JSON.parse(accountInfo);

  const getVoucher = () => {
    if (account != null) {
      dispatch(PutAccountGiveVoucher(account._id, props.data._id));
    }
  };

  return (
    <div
      style={{
        width: 200,
        height: 100,
        borderRadius: 10,
        padding: 8,
        border: '1px solid',
        borderColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 'bold' }}>
          {props.data.name}
        </div>
        <div style={{ fontSize: 10, color: 'gray', lineHeight: '10px' }}>
          {props.data.body}
        </div>
        <div
          style={{
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 10,
            backgroundColor: 'green',
          }}
          onClick={() => getVoucher()}
        >
          Get it
        </div>
      </div>
      <div style={{ width: 100, height: 100 }}>
        <img
          src={props.data.thumbnail}
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />
      </div>
    </div>
  );
};
export default VoucherItem;
