const devBaseURL = "http://123.207.32.32:9001/";
const proBaseURL = "http://192.168.10.90:3000";

export const BASEURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000