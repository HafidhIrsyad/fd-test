import axios from 'axios';

export const getAllData = async () => {
  const data = await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
  return data?.data
}
