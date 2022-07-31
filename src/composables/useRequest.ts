import { ref, reactive } from "vue";
import axios from "axios";

export const useRequiest = (url: string, params: {}) => {
  let response = ref();

  const request = async () => {
    const res = await axios.get(`https://kinopoiskapiunofficial.tech/api/${url}`,{
      headers: {
        // 'X-API-KEY': '604569b3-19a1-4526-a4ea-f1d61b46671b',
        'X-API-KEY': '193078cd-04ef-4964-a6a9-d0b6f3aaebc8',
        'Content-Type': 'application/json',
      },
      params: params
    }).catch(function () {
      // handle error
      console.error;
    })
    if(res?.data.items) {
      response.value = await res?.data.items
    } else if (res?.data.films) {
      response.value = await res?.data.films
    } else {
      response.value = await res?.data
    }
  }

  return {
    request,
    response
  }
}
