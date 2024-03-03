const shoppingCart = {
  items: [],
  total: 0,
  getIndexByName(itemName) {
    return this.items.findIndex(({name}) => itemName === name);
  },
  addItem(name, price, quantity) {
    const newItem = {name, price, quantity};
    this.items.push(newItem);
    this.calculateTotal();
  },
  removeItem(name) {
    const indexToRemove = this.getIndexByName(name);
    if (indexToRemove === -1) {
      return;
    }
    this.items = [
      ...this.items(0, indexToRemove),
      ...this.items(indexToRemove + 1)
    ];
    this.calculateTotal();
  },
  updateQuantity(name, quantity) {
    const indexToUpdate = this.getIndexByName(name);
    if (indexToUpdate === -1) {
      return;
    }
    this.items[indexToUpdate].quantity = quantity;
    this.calculateTotal();
  },
  calculateTotal() {
    let total = 0;
    for (const {price, quantity} of this.items) {
      const cost = price * quantity;
      total += cost;
    }
    this.total = total;
  },
  clearCart() {
    this.items = [];
    this.total = 0;
  }
};