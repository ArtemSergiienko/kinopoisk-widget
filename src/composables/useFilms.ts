import { ref, reactive } from "vue";
import axios from "axios";

export const useFilms = (url: string, params: {}) => {
  let response = ref();

  const request = async () => {
    const res = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${url}`,{
      headers: {
        'X-API-KEY': '604569b3-19a1-4526-a4ea-f1d61b46671b',
        'Content-Type': 'application/json',
      },
      params: params
    }).catch(function () {
      // handle error
      console.error;
    })
    if(res?.data.items) {
      response.value = await res?.data.items
    } else {
      response.value = await res?.data
    }
  }

  return {
    request,
    response
  }
}
