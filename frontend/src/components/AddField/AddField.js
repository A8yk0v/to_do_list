import React, {useState} from 'react';
import Button from "@biocad/bcd-front-ui/controls/Button";
import Textarea from '@biocad/bcd-front-ui/controls/Textarea';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import Card from '@biocad/bcd-front-ui/layout/Card';


function AddField(props) {
    const [value, setValue] = useState("");

    function handleSubmit(event) {
        if (value == "")
            return;
        props.transferData(value);
        setValue("");
        event.preventDefault();
    }

    // <textarea placeholder="New.."
    //           value={value}
    //           onChange={(event) =>
    //               setValue(event.target.value)
    //           }
    //           rows="1"/>

    // Компоненты в ряд
    const container = {
        //display: "flex",
        flexDirection: "row",
        minHeight: "50%",
    };

    return  <Card>
                <form onSubmit={handleSubmit}>
                    <h4>New task:</h4>
                    <Textarea row="1" value={value} placeholder="New.."
                              onChange={
                                  (event) => setValue(event.target.value)
                              }/>
                    <Button icon={faPlus}  type="submit" size="S" view="primary" text="Add"/>
                </form>
            </Card>

}

export default AddField