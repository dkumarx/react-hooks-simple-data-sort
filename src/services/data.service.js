export const fetchDataList = async () => {
    const URL = `https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json`;
    const APIRequest = new Request(URL);
   const response = fetch(APIRequest)
      .then(response => {
        return response
      })
      .catch((err)=> {
        console.log('-- ERROR on fetch API ', err);
        return err
      })
      .finally((response)=> {
        console.log(' -- Fetch API call DONE ---');
      });
    return response;
};
