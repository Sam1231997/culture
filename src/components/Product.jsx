

const products = [
  {
    id: 1,
    name: 'Traditional Berom Attire',
    description: 'Hand-woven Berom traditional fabric perfect for special occasions.',
    price: '$250',
    image: '/images/attire/atta1.jpg',
  },
  {
    id: 2,
    name: 'Afizere',
    description: 'Vibrant and colorful wax print fabric from Northern Nigeria.',
    price: '$180',
    image: '/images/attire/atta2.jpeg',
  },
  {
    id: 3,
    name: 'Angas',
    description: 'Iconic lion head print shirt, a symbol of royalty and strength.',
    price: '$220',
    image: '/images/attire/atta3.jpeg',
  },
  {
    id: 4,
    name: 'Mwaghavul',
    description: 'Richly embroidered gown worn by the Mwaghavul people.',
    price: '$300',
    image: '/images/attire/atta4.jpg',
  },
  {
    id: 5,
    name: 'Tarok',
    description: 'Traditional wrapper and top ensemble with intricate beadwork.',
    price: '$280',
    image: '/images/attire/atta5.jpg',
  },
  {
    id: 6,
    name: 'Anaguta',
    description: 'Classic and elegant two-piece attire for women.',
    price: '$200',
    image: '/images/attire/atta6.jpeg',
  },
];

const Product = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-2xl font-bold text-green-600">
                {product.price}
              </span>
              <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;