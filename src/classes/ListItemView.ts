import ChildItemView from './ChildItemView';
import ListItem from './ListItem';

export default class ListItemView {
    childItems: Array<ChildItemView>;
    isOpen: boolean;

    public get checkedAllChildItems(): boolean {
        return !!this.childItems.length && this.childItems.filter(childItem => childItem.checked).length === this.childItems.length;
    }   
    
    public get checkedSomeChildItem(): boolean {
        return this.childItems.some(childItem => childItem.checked);
    }

    constructor(item?: ListItem) {
        this.childItems = [];
        this.isOpen = false;

        if(item) {
            this.childItems = item.childItems.map(childItem=>new ChildItemView(childItem));
        }
    }
}