import axios from "axios";

const api = axios.create({
  baseURL: "https://ads-projeto2-api.herokuapp.com/api/",
  // baseURL: "http://192.168.1.12:3000/api/",
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImZpcnN0X25hbWUiOiJNYXRoZW8iLCJsYXN0X25hbWUiOiJTb3V6YSIsImlhdCI6MTY1Nzg4OTIzMywiZXhwIjoxNjU4NDk0MDMzfQ.qYqf6vcFzh6Snt0VGVMT93TI1Gj7hoA-dtpVsYklOos",
  },
});

export default api;
