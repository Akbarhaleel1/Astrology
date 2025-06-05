
const axios = require('axios');
const qs = require('qs');

const CLIENT_ID = '9dac12fa-4423-4373-bb0f-28c3a63b65c1';
const CLIENT_SECRET = 'HGtZf8QPJytcZBe1n7Qvs6yVjee7nM01svTGTyHf';
const TOKEN_URL = 'https://api.prokerala.com/token';

async function getAccessToken() {
    try {
        const response = await axios.post(
            TOKEN_URL,
            qs.stringify({
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        console.log('Access Token:', response.data);
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response ? error.response.data : error.message);
    }
}

// Export the function
module.exports = { getAccessToken };
