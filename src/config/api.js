import { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const baseURL = process.env.REACT_APP_API_URL;

if (baseURL === 'http://wolox.com') {
  console.warn('API baseURL has not been properly initialized'); // eslint-disable-line no-console
}

const STATUS_CODES = {
  unauthorized: 401
};

const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();

const api = create({
  /*
   * TODO Add this if you need it
   * baseURL: process.env.API_BASE_URL,
   */
  baseURL,
  timeout: 15000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// eslint-disable-next-line no-unused-vars, prettier/prettier, @typescript-eslint/no-unused-vars
export const apiSetup = dispatch => {
  api.addMonitor(response => {
    if (response.status === STATUS_CODES.unauthorized) {
      /*
       * TODO: These callbacks should only be called if no other callback was asigned for the response.
       * - dispatch(alertActions.error(i18next.t('apiErrors:expired')));
       */
    }
  });

  api.addMonitor(response => {
    if (response.problem === 'NETWORK_ERROR') {
      // TODO: These callbacks should only be called if no other callback was asigned for the response.
    }
  });
};

api.addResponseTransform(response => {
  if(response.headers){
    response.data.headers = response.headers;
  }
  if (response.data) {
    response.data = response.data ? deserializer.serialize(response.data) : null;
  }
});

// Request transform to serialize the body to camel_case backend structure
api.addRequestTransform(request => {
  if (request.data) {
    request.data = serializer.serialize(request?.data);
  }
});

export default api;
