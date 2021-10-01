let BASE = 'http://localhost:4766/api';

export default {
  getContacts: async () => {
    const res = await fetch(BASE + '/infocontact');
    const json = await res.json();
    return json;
  }
};
