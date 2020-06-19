import React, {useState, useEffect} from 'react';
import {fetchDataList} from '../../services/data.service';
import {filterCatPetsByGender} from '../../utils/index'
import Header from '../header.component'

const Pets = () => {
  const [state, setState] = useState({data: null, isLoading: false})
  const [maleOwnrPets, setMaleOwnrPets] = useState([])
  const [femaleOwnerPets, setFemaleOwnerPets] = useState([])

  const  fetchUserData = async () => {
    setState({isLoading: true})
    try{
       const _data = await fetchDataList()
       setState({data: _data})
       setMaleOwnrPets(await filterCatPetsByGender(_data, 'Male'))
       setFemaleOwnerPets(await filterCatPetsByGender(_data, 'Female'))
      setState({isLoading: false})
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="petsWrapper">
      <Header />
      <main>
        {
         state?.isLoading ? <h4>Loading.....</h4> : <div> 
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
       
      </main>
    </div>
  );
}

export default Pets;
