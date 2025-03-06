import { Product } from "@/lib/schema/zod-schema";

export const dummyProducts: Product[] = [
  {
    _id: "1",
    sku: "abc-123",
    name: "Sample Product 1",
    description: "This is a sample product.",
    price: 19.99,
    stock: 100,
    image: "",
    category: "Electronics",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
  },
  {
    _id: "2",
    sku: "def-456",
    name: "Sample Product 2",
    description: "Another great product.",
    price: 29.99,
    stock: 50,
    image: "",
    category: "Clothing",
    createdAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-04T00:00:00Z",
  },
  {
    _id: "3",
    sku: "ghi-789",
    name: "Sample Product 3",
    description: "A third product example.",
    price: 39.99,
    stock: 75,
    image: "",
    category: "Books",
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-06T00:00:00Z",
  },
  {
    _id: "4",
    sku: "jkl-012",
    name: "Sample Product 4",
    description: "The fourth product in the list.",
    price: 49.99,
    stock: 25,
    image: "",
    category: "Home & Garden",
    createdAt: "2024-01-07T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
  },
];
