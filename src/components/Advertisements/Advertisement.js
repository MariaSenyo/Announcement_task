import "./Advertisement.scss";
import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AdvertisementItem from "../AdvertisementItem/AdvertisementItem";


const Advertisement = () => {
    const [advertisements, setAdvertisements] = useState([]);
    const [newAdvertisement, setNewAdvertisement] = useState("")

    const inputChange = (e) => {
        setNewAdvertisement(e.target.value);
    }

    const addAdvertisement = (e) => {
        e.preventDefault();
        const newAdvertisementItem = {
            id: Date.now(),
            title: "Add a Title",
            text: newAdvertisement,
            date: Date().slice(0, 24)
        }

        setAdvertisements((prevState) => [newAdvertisementItem, ...prevState])
        setNewAdvertisement('')
    };

    const [value, setValue] = useState('')

    const filteredTitle = advertisements.filter(advertisement => {
        return advertisement.title.includes(value)
    })

    return (
        <>
            <div className='header'>
                <h1>ДОШКА ОГОЛОШЕНЬ</h1>
                <div className="search">
                    <form className="search__form">
                        <input type="text"
                               placeholder="Find advertisement"
                               className="search__input"
                               onChange={(e) => setValue(e.target.value)}/>
                    </form>
                </div>
            </div>
            <div className='advertisements'>
                <form className="advertisements__form"
                      onSubmit={addAdvertisement}>
                    <TextareaAutosize
                        className="textarea_text"
                        placeholder="Text of advertisement"
                        autoFocus
                        value={newAdvertisement}
                        onChange={inputChange}
                        aria-label="minimum height"
                        minRows={7}
                    />
                    <Button variant="contained"
                            color="primary"
                            type='submit'>
                        New Advertisement
                    </Button>
                </form>
                <div className="advertisements__list">
                    {advertisements.length
                        ? (filteredTitle.map((advertisement) => <AdvertisementItem key={advertisement.id}
                                                                                   advertisement={advertisement}
                                                                                   advertisements={advertisements}
                                                                                   setAdvertisements={setAdvertisements}/>))
                        : <h2>No Advertisements</h2>
                    }
                </div>
            </div>
        </>
    );
};

export default Advertisement;