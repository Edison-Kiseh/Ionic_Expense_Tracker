export class ExpenseModel {
    public categoryName: string;
    public color: string;
    public price: number;

    constructor() {
        this.categoryName = '';
        this.color = '';
        this.price = 0;
    }
}
