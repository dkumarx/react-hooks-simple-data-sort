export const filterCatPetsByGender = async (data, gender) => {
    const filteredData = [].concat.apply([], data.filter(item => item.gender === gender).filter(p=> p.pets !== null).map(i => i.pets)).filter(t => t.type === 'Cat').map(pet => pet.name).sort()
    return filteredData
}