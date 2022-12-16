import { getResources } from '../api';
// import { useState,useEffect } from 'react';
// import CreateResource from './createResource';


// function Resource(){
//     const [resources, setResources] = useState([]);
//     // const [resources, setResources] = useState(getResources());

//     useEffect(() => {
//         setResources(getResources());
//     },[]);

//     <CreateResource setResources={setResources} />

//     return (
//         <div>
//             {resources.map((resource) => (
//                 <div key={resource.id}>
//                     <h2>{resource.name}</h2>
//                     <p>{resource.description}</p>
//                     </div>
//             ))}
//         </div>
//     );

// }


function Resource(){
    const resources = getResources();

    return (
        <div>
            {resources.map((resource) => (
                <div key={resource.id}>
                    <h2>{resource.name}</h2>
                    <p>{resource.description}</p>
                    </div>
            ))}
        </div>
    );
}

export default Resource
