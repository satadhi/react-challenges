export let handleAddFolderItem = (data, id, item, isFolder) => {


    if (data.id === id && data.isFolder) {
        data.items.unshift({
            id: new Date().getTime(),
            name: item,
            isFolder: isFolder,
            items: []
        });

        return { ...data };
    } else {

        let items =
            data.items.map(
                (obj) =>
                    handleAddFolderItem(obj, id, item, isFolder))

        return { ...data, items: items }
    }
}
