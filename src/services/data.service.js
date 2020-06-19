export const fetchDataList = async () => {
    const URL = `https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json`;
    const myRequest = new Request(URL);
   const result = fetch(myRequest)
      .then(response => response.json())
      .then(data => {
       return data
      })
      .catch(console.error);
    return result;
};
