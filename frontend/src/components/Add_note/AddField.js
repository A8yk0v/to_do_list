import React, {useState} from 'react'

function AddField(props) {
    const [value, setValue] = useState("New ..");

    function handleSubmit(event) {
        props.transferData(value);
        setValue("New ..");
        event.preventDefault();
    }

    return  <form onSubmit={handleSubmit}>
                <p>Add:
                    <textarea value={value}
                              onChange={(event) =>
                                  setValue(event.target.value)
                              }
                              rows="1"/>
                    <input type="submit" value="Add" />
                </p>
            </form>
}

export default AddField