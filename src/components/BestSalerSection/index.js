import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import './style.css';
import classNames from 'classnames';
import BestSalerItem from './BestSaleItem';
const BestSalerSection = (props) => {
  const classes = useStyles();

  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    fade: false,
    infinite: true,
    // dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'sliderbestsaler',
    // appendDots: (dots) => (
    //   <div>
    //     <ul style={{ margin: '0px' }} className="ul_dots_bestsaler">
    //       {dots}
    //     </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       backgroundColor: colors.lightGray2,
    //       height: '2px',
    //       borderRadius: '2px',
    //       width: '20px',
    //     }}
    //   ></div>
    // ),
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <Box className={classNames(classes.container_best_saler, 'reveal')}>
      <Box>
        <Box
          className={classNames(
            classes.container_banner,
            'reveal',
            'sliderbestsaler',
          )}
        >
          <Box className="arrow-bestsaler-hover">
            <Box
              className="arrow-bestsaler"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                className={classNames(classes.prevSlide, 'prevArrowBestSaler')}
                onClick={() => gotoPrev()}
              >
                <ArrowBackIosNew sx={{ fontSize: 24 }} />
              </Box>
              <Box
                className={classNames(classes.prevSlide, 'nextArrowBestSaler')}
                onClick={() => gotoNext()}
              >
                <ArrowForwardIos sx={{ fontSize: 24 }} />
              </Box>
            </Box>
          </Box>
          <Slider {...sliderSettings} ref={customeSlider}>
            {props?.data.map((item) => {
              return <BestSalerItem data={item} />;
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default BestSalerSection;
