// Utility functions for cart operations

export function getTotalPrice(cart: any[]): number {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

export function getQuantity(cart: any[], id: number): number {
  return cart.filter(item => item.id === id).length;
} 