import AxiosInstance from './serviceConfig';

const ContactsServices = {
    getContacts: () => {
        return AxiosInstance.get('/contacts.json');
    }
}

export default ContactsServices;