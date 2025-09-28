 
const API_CONFIG = {
    BASE_URL: process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001/api'  
        : 'https://api.pmelody.top/api',  
    ENDPOINTS: {
        AUTH: '/auth',
        USERS: '/users', 
        LYRICS: '/lyrics',
        SONGS: '/songs',
        NFT: '/nft'
    }
};

 
window.API_CONFIG = API_CONFIG;
