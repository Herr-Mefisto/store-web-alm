const dev = {
  apiUrl: "http://localhost:4000"
};

const prod = {
  apiUrl: "https://store-server-alm.herokuapp.com"
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  ...config
};
