import ChildItem from '@/classes/ChildItem';

export default class ChildItemView extends ChildItem {
    checked: boolean;

    constructor(childItem?: ChildItem) {
        super();

        this.checked = false;
        
        if(childItem) {
            this.color = childItem.color;
            this.count = childItem.count;
        }
    }
}