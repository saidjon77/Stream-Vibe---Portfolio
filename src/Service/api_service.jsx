import axios from 'axios'

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDEyNDQ5ZjVhNTZlYTUzZjUzZmUxMjkwMGY5YzNmZiIsIm5iZiI6MTc1NTc3MjE5Mi4zMjgsInN1YiI6IjY4YTZmNTIwMzJjZGE4ZjBhZmZkMmIxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SsDHR4-ntrALqEmc0oXyab4WYpit5NyoRIW6kJPiKgw`
    }
}

const BaseUrl = `https://api.themoviedb.org/3`

const Api_Service = {
   getData: async (url) =>{
    let data = await axios.get(`${BaseUrl}/${url}`, options)
    return data.data
}
}

export default Api_Service
