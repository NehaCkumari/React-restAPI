import data from "./data/db.json";

export function getResources(){
    return data.resources;

    // //updates 2
    // var resources = JSON.parse(localStorage.getItem('resources'));

    // if (!resources){
    //     return data.resources
    // }

    // return resources
    // //updated 2
}

export function createResource(resources){
    //Generate a new id for the resources
    const newId = data.resources.length+1;

    //Add the new resource to the array
    data.resources.push({
        id: newId,
        ...resources
    });

    //Return the new resource
    return data.resources.find(r => r.id === newId);

    // //update 2
    // var resources = JSON.parse(localStorage.getItem('resources'));

    // if (!resources){
    //     resources = data.resources;
    // }

    // const newId = resources.length+1;

    // resources.push({
    //     id: newId,
    //     ...resources
    // });

    // localStorage.setItem('resources', JSON.stringify(data.resources));

    // return resources.find(r => r.id === newId)
    // //update 2
}
