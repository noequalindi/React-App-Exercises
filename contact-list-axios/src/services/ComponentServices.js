import AxiosInstance, { setHeaders } from './serviceConfig';

const ComponentServices = {
    getContacts: () => {
          return AxiosInstance.get('/v3/contacts.json');
    }
}

export default ComponentServices;