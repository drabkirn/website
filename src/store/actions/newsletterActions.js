// Add Contact to Newsletter - POST /newsletter_subscribe
export const addContactToNewsletter = (firstName, email) => {
  return (dispatch) => {
    const myHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'Drabkirn : Website : https://drabkirn.cdadityang.xyz'
    };

    const myBody = {
      "firstName": firstName,
      "email": email
    };

    const functionsURL = "https://dbk-newsletter.azurewebsites.net/api/HttpTrigger1?code=7ixR0EejYdeoPaHKvWX8a7QoBXKsEgzryKSAUC//yW9MLq04W6Rmnw==";
    
    fetch(functionsURL, { method: 'POST', headers: myHeaders, body: JSON.stringify(myBody) })
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