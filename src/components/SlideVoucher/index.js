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
import classNames from 'classnames';
const SlideVoucher = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'slidervoucher',
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
      var elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <Box
      className={classNames(
        classes.container_banner,
        'reveal',
        'slidervoucher',
      )}
    >
      <Box className="arrow-slider-hover">
        <Box
          className="arrow-slider"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            className={classNames(classes.prevSlide, 'prevArrowSlide')}
            onClick={() => gotoPrev()}
          >
            <ArrowBackIosNew sx={{ fontSize: 14 }} />
          </Box>
          <Box
            className={classNames(classes.prevSlide, 'nextArrowSlide')}
            onClick={() => gotoNext()}
          >
            <ArrowForwardIos sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Box>
      <Slider {...sliderSettings} ref={customeSlider}>
        {Array(11)
          .fill(1)
          .map((item) => {
            return (
              <Box px={1.25}>
                <Box className={classes.container_item_voucher}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210527/pngtree-abstract-art-light-pink-gradient-background-image_721455.jpg"
                    className={classes.img_voucher}
                  />
                  <Box className={classes.bx_content_voucher}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: 24,
                        color: colors.yellow,
                        fontWeight: 'bold',
                        lineHeight: '32px',
                      }}
                    >
                      15.000
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: 16,
                        color: colors.orange,
                        marginBottom: 0.5,
                        fontWeight: 'bold',
                      }}
                    >
                      Le quoc khanh - 23/07/2022
                    </Typography>
                    <Box className={classes.bx_btn_get}>
                      <Box className={classes.bx_amount}>
                        <Typography
                          variant="subtitle2"
                          color="text.black"
                          sx={{ fontWeight: 'bold' }}
                        >
                          23
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ color: colors.white, fontWeight: 'bold' }}
                      >
                        GET IT
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.circle1}></Box>
                  <Box className={classes.circle2}></Box>
                </Box>
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
};

export default SlideVoucher;
