var contacts = 
[{Id: 1,
  name: 'Andi',
  gender: 'male',
  group_ids: [1,2,3]},
 {Id: 2,
  name: 'Budi',
  gender: 'male',
  group_ids: [1,2]},
 {Id: 3,
  name: 'Cindy',
  gender: 'male',
  group_ids: [1]},
 {Id: 4,
  name: 'David',
  gender: 'male',
  group_ids: [1,2]},
 {Id: 5,
  name: 'Emily',
  gender: 'male',
  group_ids: [1,2,3]}]

var groups = [{id: 1,
              name: 'Teman SMP'},
              {id: 2,
              name: 'Teman SMA'},
              {id: 3,
              name: 'Teman Kuliah'}]

let showContactByGroup = group_name => {
let index;
  for (let i = 0 ; i < groups.length ; i++){
    if (group_name === groups[i].name){
      index = groups[i].id 
    }
  }
let nama = []
  for (let j = 0 ; j < contacts.length ; j++){
    if (contacts[j].group_ids.indexOf(index) !== -1 ){
        nama.push(contacts[j].name)
    }
  }
  return nama
}

console.log (showContactByGroup('Teman Kuliah'))
console.log (showContactByGroup('Teman SMA'))
console.log (showContactByGroup('Teman SMP'))




