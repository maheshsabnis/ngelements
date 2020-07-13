export class Product {
  constructor(
    public ProductRowId: number,
    public ProductId: string,
    public ProductName: string,
    public CategoryName: string,
    public Manufacturer: string,
    public Description: string,
    public BasePrice: number
  ){
  }
}

export const Categories = ['Electronics', 'Electrical', 'Food', 'Fabric'];
export const Manufacturers = ['IBM', 'HP', 'Bajaj', 'TATA', 'MST'];
