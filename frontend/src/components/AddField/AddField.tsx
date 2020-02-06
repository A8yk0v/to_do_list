import * as React from 'react';
import Button from "@biocad/bcd-front-ui/controls/Button";
import Textarea from '@biocad/bcd-front-ui/controls/Textarea';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import Card from '@biocad/bcd-front-ui/layout/Card';

import Input from '@biocad/bcd-front-ui/controls/Input';

interface IProps {
    transferData: (title: string, arg: string) => void
}

const AddField:React.FC<IProps> = (props) => {

    const [value, setValue] = React.useState<string>("");
    const [title, setTitle] = React.useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) : void {
        if (value == "")
            return;
        props.transferData(title, value);
        setValue("");
        event.preventDefault();
    }

    return <Card>
        <form onSubmit={handleSubmit} style={{margin: "5px"}}>
            <h4>New task:</h4>
            <Input placeholder="Title" onChange={
                (event) => setTitle(event.target.value)
            }/>
            <Textarea row="1" value={value} placeholder="New.."
                      onChange={
                          (event) => setValue(event.target.value)
                      }/>
            <Button icon={faPlus}  type="submit" size="S" view="primary" text="Add"/>
        </form>
    </Card>
};

// function AddField(props) {
//     const [value, setValue] = useState<string>("");
//
//     function handleSubmit(event: React.FormEvent<HTMLFormElement>) : void {
//         if (value == "")
//             return;
//         props.transferData(value);
//         setValue("");
//         event.preventDefault();
//     }
//
//     // <textarea placeholder="New.."
//     //           value={value}
//     //           onChange={(event) =>
//     //               setValue(event.target.value)
//     //           }
//     //           rows="1"/>
//
//     // Компоненты в ряд
//     const container = {
//         //display: "flex",
//         flexDirection: "row",
//         minHeight: "50%",
//     };
//
//     return  <Card>
//                 <form onSubmit={handleSubmit}>
//                     <h4>New task:</h4>
//                     <Textarea row="1" value={value} placeholder="New.."
//                               onChange={
//                                   (event) => setValue(event.target.value)
//                               }/>
//                     <Button icon={faPlus}  type="submit" size="S" view="primary" text="Add"/>
//                 </form>
//             </Card>
//
// }

export default AddField