const API_URL = 'https://swadesi-shopping-website-backend.onrender.com/api';

export const fetchProducts = async (search = '') => {
  const url = search ? `${API_URL}/products?search=${search}` : `${API_URL}/products`;
  const response = await fetch(url);
  return await response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  return await response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${API_URL}/products/category/${category}`);
  return await response.json();
};

// Cart APIs
export const fetchCartItems = async () => {
  const response = await fetch(`${API_URL}/cart`);
  return await response.json();
};

export const addToCartApi = async (productId, quantity = 1) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity })
  });
  return await response.json();
};

export const updateCartItemApi = async (id, quantity) => {
  const response = await fetch(`${API_URL}/cart/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity })
  });
  return await response.json();
};

export const removeFromCartApi = async (id) => {
  const response = await fetch(`${API_URL}/cart/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
};

export const placeOrder = async (orderData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
    body: JSON.stringify(orderData)
  });
  return await response.json();
};

// Auth APIs
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return await response.json();
};

// Admin API
export const fetchAllOrders = async (token) => {
  const response = await fetch(`${API_URL}/orders/all`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await response.json();
};

// Accept order (admin only)
export const acceptOrder = async (orderId, token) => {
  const response = await fetch(`${API_URL}/orders/${orderId}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ status: 'Accepted' })
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Failed to update order');
  }
  
  return data;
};
