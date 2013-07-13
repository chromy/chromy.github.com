Baking.Ingredient = DS.Model.extend({
  name: DS.attr('string'),
  quantity: DS.attr('number'),
  unit: DS.attr('string')
});

Baking.Ingredient.FIXTURES = [
 {
   id: 1,
   name: 'flour',
   quantity: 100,
   unit: 'g',
 },
 {
   id: 2,
   name: 'milk',
   quantity: 10,
   unit: 'ml',
 },
 ];
