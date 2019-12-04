/**
 * This function must return what you're carrying and in what quantities to have the maximum value when you get out of the cave
 * 
 * @param {number} maxCapacity The maximum your lamp can carry
 * @param {Object[]} objects The list of objects present in the cave. They can't be divided (you can't take half a gold piece, you must take it as a full object)
 * @param {number} objects[].weight The weight of 1 object in g
 * @param {number} objects[].price The price of 1 object
 * @param {number} objects[].count The number of this kind of object present in the cave
 * @param {string} objects[].name The name of the object
 * @param {Object[]} powders The list of powders present in the cave. You can take any quantity you want, but you must always stay on a round number of g.
 * @param {number} powders[].quantity The max quantity of this powder present in the cave
 * @param {number} powders[].ppg The value of 1g of this powder
 * @param {string} powders[].name The name of this powder
 * 
 * @returns {Object[]} The list of objects and powders you will carry with correct counts and quantities
 */
function fillTheLampToBeTheRichestManInTheWorld(maxCapacity, objects, powders) {
  // TODO implement this function
  return [
    // objects and powders
    // The count of objects can be modified
    // The quantities of powders can be modified
  ];
}

module.exports.fillTheLampToBeTheRichestManInTheWorld = fillTheLampToBeTheRichestManInTheWorld
