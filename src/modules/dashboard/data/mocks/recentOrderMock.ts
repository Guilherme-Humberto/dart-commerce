import { faker } from "@faker-js/faker";

export const mockRecentOrders = faker.helpers.uniqueArray(
  () => ({
    date: "24/07/2024",
    item: "Apenas um teste",
    status: "Em processamento",
    total: "23",
  }),
  2
);
