This solution uses Axios to make the API call. Axios provides features such as automatic JSON transformation, better error handling, and interceptors.

```javascript
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('your-api-endpoint');
    const data = response.data;
    // Process the data
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
```