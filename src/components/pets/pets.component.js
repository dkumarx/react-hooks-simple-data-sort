import React, {useState, useEffect} from 'react';
import {fetchDataList} from '../../services/data.service';
import {filterCatPetsByGender} from '../../utils/index'
import Header from '../header.component'

const Pets = () => {
  const [state, setState] = useState({data: null, isLoading: false})
  const [maleOwnrPets, setMaleOwnrPets] = useState([])
  const [femaleOwnerPets, setFemaleOwnerPets] = useState([])
  const [hasData, setHasData] = useState(false)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const  fetchUserData = async () => {
    setState({isLoading: true})
    try{
       const response = await fetchDataList()    
       response.status !== 200 && setErrorMessage(response.statusText)
    
       const responseBody = await response.json()
       const _hasData = Object.keys(responseBody).length > 0;

       _hasData && setState({data: responseBody})
       
       setHasData(_hasData)
    } catch(err) {
      console.error('--Error on component', err);
    }
  }

  const getPets = async () => {
    if(hasData) {
      setMaleOwnrPets(await filterCatPetsByGender(state.data, 'Male'))
      setFemaleOwnerPets(await filterCatPetsByGender(state.data, 'Female'))
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
   getPets();
   setState({isLoading: false})
  }, [hasData])

  return (
    <div className="petsWrapper">
      <Header />
      <main>
        {
         state?.isLoading ? <h4>Loading.....</h4> : hasData && <div className="petsWrapper"> 
              <h3>Male</h3>
             { maleOwnrPets && maleOwnrPets.map((pet,i) => {
                 return (
                   <p key={i}>{pet}</p>
                 )
               })}
              <h3>Female</h3>
             { femaleOwnerPets && femaleOwnerPets.map((fPet, j) => {
                 return (
                   <p key={j}>{fPet}</p>
                 )
               })}
         </div> 
         
         }
       {(!hasData && errorMessage) &&<h4>Opps!.... Somthing went wrong... Data {errorMessage}...</h4>}
      </main>
    </div>
  );
}

export default Pets;
