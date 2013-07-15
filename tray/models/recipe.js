Baking.Ingredient = DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  unit: DS.attr('string')
});

Baking.Ingredient.FIXTURES = [
 {
   id: 1,
   name: 'flour',
   amount: 100,
   unit: 'g',
 },
 {
   id: 2,
   name: 'milk',
   amount: 10,
   unit: 'ml',
 },
 ];
