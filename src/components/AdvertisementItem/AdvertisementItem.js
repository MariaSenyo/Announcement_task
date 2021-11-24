import "./AdvertisementItem.scss";
import React, {useState} from 'react';
import {Button, Input} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const AdvertisementItem = ({advertisement, advertisements, setAdvertisements}) => {
    const [isEditorActive, setIsEditorActive] = useState(false);
    const [isTitleActive, setIsTitleActive] = useState(false);

    const [editingText, setEditingText] = useState('');
    const [editingTitle, setEditingTitle] = useState('');


    const editTextAdvertisement = (id, text) => {
        setEditingText(text)
        setIsEditorActive(prevstate => !prevstate)

        const newAdvertisements = advertisements.map(advertisement => {
            if (advertisement.id === id) {
                return {...advertisement, text: editingText}
            }
            return advertisement
        })
        setAdvertisements(newAdvertisements)
    }

    function changeTextAdvertisement(e) {
        setEditingText(e.target.value)
    }

    function deleteAdvertisement(id) {
        setAdvertisements(advertisements.filter(advertisement => advertisement.id !== id));
    }

    const editTitle = (id) => {
        setIsTitleActive(prevstate => !prevstate)

        const newTitle = advertisements.map(advertisement => {
            if (advertisement.id === id) {
                return {...advertisement, title: editingTitle}
            }
            return advertisement
        })
        setAdvertisements(newTitle)
    }

    function changeTitle(e) {
        setEditingTitle(e.target.value)
    }

    return (
        <div className="advertisements__item"
             key={advertisement.id}>


            <div className="title">
                {isTitleActive
                    ? (<Input autoFocus
                              className="edit_title"
                              onChange={changeTitle}
                              value={editingTitle}/>)
                    : <h3>{advertisement.title}</h3>}
                <Button startIcon={<Edit/>}
                        color='primary'
                        size="small"
                        onClick={() => editTitle(advertisement.id, advertisement.title)}
                        className="edit_title">
                </Button>
            </div>


            <div className="text">
                {isEditorActive
                    ? (<TextareaAutosize autoFocus
                                         className="edit_text"
                                         onChange={changeTextAdvertisement}
                                         value={editingText}/>)
                    : <div className="text_area">{advertisement.text}</div>}
                <Button startIcon={<Edit/>}
                        color='primary'
                        size="small"
                        onClick={() => editTextAdvertisement(advertisement.id, advertisement.text)}>
                </Button>
            </div>


            <div className="date">
                Added: {advertisement.date}
            </div>


            <Button startIcon={<Delete/>}
                    color='primary'
                    onClick={() => deleteAdvertisement(advertisement.id)}
                    className="delete__advertisements">
                Delete advertisement
            </Button>
        </div>
    );
};

export default AdvertisementItem;