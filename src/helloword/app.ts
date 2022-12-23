let message: string = "hello  world";

interface products {
  id: number,
  name: string,
  cost: number 
};

function getProduct(id: number): products {
  return {
    id: id,
    name: "programming software",
    cost: 57
  }
}
