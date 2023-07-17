import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ConvertVND(data) {
  // const { language } = useSelector((state) => state.utils);

  // if (language === 'en') {
  //   return (
  //     <>
  //       {(parseInt(data) / 24000)
  //         .toFixed(2)
  //         .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
  //     </>
  //   );
  // }
  return (
    <>
      {' '}
      {parseInt(data).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      })}
    </>
  );
}

export default ConvertVND;
