import React, { useState } from "react";
import ToDoList from "./ToDoList";

const MainScreen = () => {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setInputList('');
    }
    const deleteItems = (id) => {
        console.log('deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type='text' placeholder="Add a Items"
                        value={inputList} onChange={itemEvent} />
                    <button onClick={listOfItems}>+</button>


                    <ol>
                        {
                            items.map((itemVal, index) => {
                                return <ToDoList
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems}
                                    text={itemVal}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default MainScreen;