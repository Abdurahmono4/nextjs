"use client";
const getData = async () => {
  const res = await fetch("http://dummyjson.com/products");
  const data = await res.json();
  return data;
};

interface Product {
  id: number;
  price: number;
  title: string;
  rating: number;
  description: string;
  thumbnail: string;
}

async function ProductList() {
  const data = await getData();

  return (
    <div
      className="grid grid-cols-3
     w-auto gap-x-10 items-center text-center bg-[url('https://pngtree.com/freebackground/a-festive-scene-with-cheerful-people-exchanging-gifts-and-greetings-against-backdrop-of-colorful-bazaars-bustling-streets_15437998.html')]  
    "
    >
      {data.products.map((product: Product) => (
        <div
          key={product.id}
          className="card  bg-green-300 text-center  items-center  flex ml-auto mr-auto gap-5 mt-5 p-5 w-96    hover:transform-gpu bg-[url('https://pngtree.com/freebackground/set-of-different-colours-and-shapes-of-pompoms-in-an-bazaar_15473992.html')]"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className=""
            width={300}
            height={300}
            className="rounded-md bg-green-300"
          />
          <div className="bg-orange-300 w-full rounded-md pt-3">
            <h1 className="font-mono">{product.title}</h1>
            <span className="flex justify-between p-5 rounded-md pt-3 ">
              <span className="flex">
                price:
                <h2 className=" font-extrabold">{product.price}$</h2>
              </span>
              <span className="flex">
                rating:
                <h3 className="font-bold">{product.rating}⭐</h3>
              </span>
            </span>
          </div>
          <button
            className="w-full btn btn-primary bg-lime-300 border-none  "
            onClick={() =>
              alert(
                `id: ${product.id}\nprice: ${product.price}$\ntitle: ${product.title}\nrating: ${product.rating}⭐\ndescription: ${product.description}`
              )
            }
          >
            More information
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
