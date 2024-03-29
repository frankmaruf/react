import React from "react"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export const Note =(props) => {
    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
    return(
        <React.Fragment>
            <div className="note">
                <h1> {props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                <DeleteForeverIcon className="deleteIcon"/>
                </button>
            </div>
        </React.Fragment>
    )
}