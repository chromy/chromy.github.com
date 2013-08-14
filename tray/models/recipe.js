Baking.Recipe = DS.Model.extend({
    name: DS.attr('string'),
    servings: DS.attr('number'),
    ingredients: DS.hasMany('Baking.Ingredient')
});

Baking.Ingredient = DS.Model.extend({
    recipe: DS.belongsTo('Baking.Recipe'),
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

Baking.Recipe.FIXTURES = [
{
    id: 1,
    name: 'Pancakes',
    ingredients: [1, 2]
}
];

