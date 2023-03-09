import { ref } from "vue";
import axios from "axios";

export const useRequest = (url: string, params: {}, fullResponse: boolean) => {
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
    response.value = await res?.data
  }

  return {
    request,
    response
  }
}
