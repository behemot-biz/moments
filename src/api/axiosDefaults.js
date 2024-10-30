import axios from "axios";

axios.defaults.baseURL = 'https://behemot-biz-django-rest-api-918c07318b07.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true