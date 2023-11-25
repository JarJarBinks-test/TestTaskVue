import ChildItem from './ChildItem';

export default class ListItem {
    childItems: Array<ChildItem>;

    constructor() {
        this.childItems = [];
    }
}