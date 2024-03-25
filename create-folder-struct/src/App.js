import { useState } from 'react';
import './App.css';
import Folder from './data/components/folder/Folder';
import data from './data/data';
import { handleAddFolderItem } from './helper/addFolderItem'
function App() {
  

    let[folderData, setFolderData] = useState(data);
  
    const handleInsertNode = (folderId, item, isFolder) => {
      const finalTree = handleAddFolderItem(folderData, folderId, item, isFolder);
      setFolderData(finalTree);
    };
  
    return (
    <>
      <Folder handleInsertNode = {handleInsertNode} data={folderData} />
    </>
  );
}

export default App;
