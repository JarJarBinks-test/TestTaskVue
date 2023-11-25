import ChildItem from "@/classes/ChildItem";
import ListItem from "@/classes/ListItem";

export default {
    async loadItems(): Promise<Array<ListItem>> {
        const testArray = Array.from({length: 5}, () => {
            const item = new ListItem();
            item.childItems = Array.from({length: Math.max(4, Math.floor(Math.random() * 10))}, () => {
                const childItem = new ChildItem();
                childItem.count = Math.floor(Math.random() * 20);
                childItem.color = `#${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
                return childItem;
              });
            return item;
          });
        
        return Promise.resolve(testArray);
    }
}