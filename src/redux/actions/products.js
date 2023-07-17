import axios from 'axios';
import {
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_ADMIN_SUCCESS,
  GET_ALL_PRODUCT_ADMIN_FAIL,
  GET_ALL_PRODUCT_ADMIN_ACCOUNT_SUCCESS,
  GET_ALL_PRODUCT_ADMIN_ACCOUNT_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAIL,
  PUT_PRODUCT_SUCCESS,
  PUT_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  GET_ALL_PRODUCT_CATEGORY_SUCCESS,
  GET_ALL_PRODUCT_CATEGORY_FAIL,
  GET_ALL_PRODUCT_TOP_SALE_SUCCESS,
  GET_ALL_PRODUCT_TOP_SALE_FAIL,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
  START_QUERY,
  END_QUERY,
  GET_RECOMMENDER_PRODUCT_SUCCESS,
  GET_RECOMMENDER_PRODUCT_FAIL,
} from '../constants/products';
import action from './action';

// localStorage.setItem("customorLogin", JSON.stringify(res.data))
// localStorage.setItem("isCustomorLogin", JSON.stringify(true))

export const GetRecommenderSystem = (name) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/product/recommendersystem/${name}`)
      .then((res) => {
        dispatch(action(GET_RECOMMENDER_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_RECOMMENDER_PRODUCT_FAIL, product));
      });
  };
};

export const PostProduct = (data) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:8080/api/product`, data)
      .then((res) => {
        dispatch(action(POST_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_PRODUCT_FAIL, product));
      });
  };
};

export const GetProducts = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/product`)
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_PRODUCT_FAIL, product));
      });
  };
};
export const GetProductCategory = (data) => {
  const body = { category: data };

  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/product/category/${data}`)
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_CATEGORY_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_PRODUCT_CATEGORY_FAIL, product));
      });
  };
};

export const GetProductTopSale = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/product/topSale`)
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_TOP_SALE_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_PRODUCT_TOP_SALE_FAIL, product));
      });
  };
};

export const GetProductCategoryFilter = (data) => {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:8080/api/product/category`, { data })
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_CATEGORY_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err,
        };
        dispatch(action(GET_ALL_PRODUCT_CATEGORY_FAIL, product));
      });
  };
};

export const GetAdminProducts = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/product/admin/all`)
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_ADMIN_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_PRODUCT_ADMIN_FAIL, product));
      });
  };
};
export const GetAdminAccountProducts = () => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8080/api/product/admin/account`)
      .then((res) => {
        dispatch(action(GET_ALL_PRODUCT_ADMIN_ACCOUNT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_ALL_PRODUCT_ADMIN_ACCOUNT_FAIL, product));
      });
  };
};
export const GetProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/product/${id}`)
      .then((res) => {
        dispatch(action(GET_PRODUCT_DETAIL_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(GET_PRODUCT_DETAIL_FAIL, product));
      });
  };
};

export const SearchProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/api/product/${id}`)
      .then((res) => {
        dispatch(action(SEARCH_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(SEARCH_PRODUCT_FAIL, product));
      });
  };
};

export const PutProduct = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/product/${id}`, data)
      .then((res) => {
        dispatch(action(PUT_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(PUT_PRODUCT_FAIL, product));
      });
  };
};

export const PutCommentProduct = (id, data, token) => {
  if (token) {
    return (dispatch) => {
      dispatch(action(START_QUERY, true));
      axios
        .put(`http://localhost:8080/api/product/comment/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(action(POST_COMMENT_SUCCESS, res.data));
        })
        .catch((err) => {
          const product = {
            open: true,
            severity: 'error',
            message: err.request.responseText,
          };
          dispatch(action(POST_COMMENT_FAIL, product));
        });
    };
  }
};

export const PutLikeCommentProduct = (id, data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8080/api/product/comment/${id}`, data)
      .then((res) => {
        dispatch(action(POST_COMMENT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(POST_COMMENT_FAIL, product));
      });
  };
};

export const DeleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8080/api/product/${id}`)
      .then((res) => {
        dispatch(action(DELETE_PRODUCT_SUCCESS, res.data));
      })
      .catch((err) => {
        const product = {
          open: true,
          severity: 'error',
          message: err.request.responseText,
        };
        dispatch(action(DELETE_PRODUCT_FAIL, product));
      });
  };
};
