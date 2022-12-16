import { createResource } from "../api";
import { useState } from "react";

function CreateResource(){
    const [resource, setResource] = useState({ name: '', description: ""});

const handleSubmit = (e) => {
    e.preventDefault();
    createResource(resource);
    
};

return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={resource.name}
        onChange={(e) => setResource({...resource, name: e.target.value})}
        placeholder="Name"
        />

        <input
        type="text"
        value={resource.description}
        onChange={(e) =>
            setResource({...resource, description: e.target.value})
        }
        placeholder="Description"
        />
        <button type="submit">Create</button>
    </form>
);

}

export default CreateResource