
import React, { useState } from "react";

export default function Folder({handleInsertNode, data }) {
    const [showNestedFolder, setshowNestedFolder] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: false
    });

    function handleShow() {
        setshowNestedFolder(!showNestedFolder);
    }

    function handleAddNewAction(event, type) {
        event.stopPropagation();
        setshowNestedFolder(true);
        setShowInput({ isFolder: type === 'folder' ? true : false, visible: !showInput.visible });

    }

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(data.id, e.target.value, showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    };


    if (data.isFolder) {

        return (
            <div className="mt-5 ml-5">

                <span onClick={handleShow} className=" bg-slate-400 w-max rounded-md p-2">
                    📁 {data.name}
                </span>
                <button onClick={(e) => handleAddNewAction(e, 'folder')} className="bg-blue-200 rounded-md p-1 ml-2 text-sm">New Folder+</button>
                <button onClick={(e) => handleAddNewAction(e, 'file')} className="bg-blue-200 rounded-md p-1 ml-2 text-sm">New File+</button>
                {
                    showInput.visible ?
                        <div>
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded my-3 focus:outline-none focus:shadow-outline"
                                autoFocus
                                onBlur={(e) => setShowInput({ ...showInput, visible: false })}
                                onKeyDown={onAddFolder}
                            />
                        </div> : ''
                }
                <div className={` ${showNestedFolder ? 'block' : 'hidden'}`}>

                    {data.items.map((ele) => <Folder key={ele.id} handleInsertNode={handleInsertNode} data={ele} />)}
                </div>
            </div>
        )
    } else {

        return (
            <div className="mt-5">
                <span className=" bg-slate-200 w-max rounded-md p-2">
                    📄{data.name}
                </span>
            </div>
        )
    }



}