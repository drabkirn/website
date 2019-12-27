let initState = {
  newsletterSubscribeStatus: false,
  newsletterSubscribeData: null,
  err: null
};

const newsletterReducer = (state = initState, action) => {
switch (action.type){
  case 'POST_NEWSLETTER_SUBSCRIBE_SUCCESS':
    return {
      ...state,
      newsletterSubscribeStatus: true,
      newsletterSubscribeData: action.payload.data,
      err: null
    };
  case 'POST_NEWSLETTER_SUBSCRIBE_API_ERROR':
    return {
      ...state,
      err: action.err.error ? action.err.error : action.err.errors,
      newsletterSubscribeData: null,
      newsletterSubscribeStatus: false
    };
  case 'POST_NEWSLETTER_SUBSCRIBE_ERROR':
    return {
      ...state,
      err: action.err.message,
      newsletterSubscribeData: null,
      newsletterSubscribeStatus: false
    };
  default:
    return state;
  }
};

export default newsletterReducer;