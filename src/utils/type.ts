export type bodyUserParams = {
  email: string;
  password: string;
  name: string;
  sdt: Number;
  avt: string;
};

export type bodyCategorieParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyProductTypeParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyVoucherParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyProductParams = {
  listed_price: number;
  price: number;
  name: number;
  material: string;
  dimensions: string;
  available: string;
  description: string;
  image: string;
  type_id: number;
  category_id: number;
};

export type bodyCustomerOrderParams = {
  account_id: number;
  product_id: number;
  voucher: number;
  listed_price: number;
  price: number;
  quantity: number;
  total_price: number;
};
