// Add Contact to Newsletter - POST /newsletter_subscribe
export const addContactToNewsletter = (firstName, email) => {
  return (dispatch) => {
    const myHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'Drabkirn : Website : https://drabkirn.cdadityang.xyz',
      'Accept': 'application/drabkirn.quotes.v1'
    };

    const myBody = {
      "quote": {
        "firstName": firstName,
        "email": email
      }
    };
    
    fetch('http://192.168.225.128:3002/newsletter_subscribe', { method: 'POST', headers: myHeaders, body: JSON.stringify(myBody) })
      .then((response) => {
        return response.json();
      }).then((res) => {
        if(res.errors){
          dispatch({
            type: 'POST_NEWSLETTER_SUBSCRIBE_API_ERROR',
            err: res
          });
        } else {
          dispatch({
            type: 'POST_NEWSLETTER_SUBSCRIBE_SUCCESS',
            payload: res
          });
        }
      }).catch((err) => {
        dispatch({
          type: 'POST_NEWSLETTER_SUBSCRIBE_ERROR',
          err: {
            message: err
          }
        });
      });
  };
};