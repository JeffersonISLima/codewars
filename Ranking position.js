/* 
https://www.codewars.com/kata/ranking-position

Ranking position

In some ranking people collects points. The challenge is sort by points and calulate position for every person. But remember if two or more persons have same number of points, they should have same position number and sorted by name (name is unique).

For example: Input structure:

[
  {
    name: "John",
    points: 100,
  },
  {
    name: "Bob",
    points: 130,
  },
  {
    name: "Mary",
    points: 120,
  },
  {
    name: "Kate",
    points: 120,
  },
]

Output should be:

[
  {
    name: "Bob",
    points: 130,
    position: 1,
  },
  {
    name: "Kate",
    points: 120,
    position: 2,
  },
  {
    name: "Mary",
    points: 120,
    position: 2,
  },
  {
    name: "John",
    points: 100,
    position: 4,
  },
]
 */

// My solution
const ranking = people => {
  let pointsHelper = null;
  let positionHelper = null;

  people
    .sort((firstElement, secondElement) => {
      if (firstElement.points < secondElement.points) return 1;

      if (firstElement.points > secondElement.points) return -1;

      if (
        firstElement.points === secondElement.points &&
        firstElement.name > secondElement.name
      ) {
        return 1;
      }

      if (
        firstElement.points === secondElement.points &&
        firstElement.name < secondElement.name
      ) {
        return -1;
      }

      return 0;
    })
    .map((person, index) => {
      person.position = index + 1;

      if (pointsHelper === person.points) {
        person.position = positionHelper;
      }

      pointsHelper = person.points;
      positionHelper = person.position;
    });

  return people;
};

const rankingPeople = ranking([
  { name: "Lxufajh", points: 120 },
  { name: "Yflgui", points: 50 },
  { name: "Wdxhehvd", points: 30 },
  { name: "Zgshak", points: 130 },
  { name: "Ikdtdsy", points: 20 },
  { name: "Dyvxcudaa", points: 120 },
  { name: "Sldyrt", points: 120 },
  { name: "Iuptwvch", points: 140 },
  { name: "Iyfvgxsenh", points: 120 },
  { name: "Eggyxuaf", points: 80 },
  { name: "Gzdikz", points: 60 },
  { name: "Vihbefz", points: 110 },
  { name: "Pkyacdq", points: 50 },
  { name: "Ajhdeh", points: 150 },
  { name: "Ybtmue", points: 40 },
  { name: "Cvitmor", points: 90 },
  { name: "Avdgko", points: 110 },
  { name: "Jbpmmpo", points: 150 },
  { name: "Pyenldhnh", points: 60 },
  { name: "Hliacsail", points: 150 },
  { name: "Zfaussd", points: 110 },
  { name: "Ewuoaop", points: 80 },
  { name: "Uboglfnfm", points: 130 },
  { name: "Qzxkhmaoi", points: 110 },
  { name: "Savqq", points: 50 },
  { name: "Wnedb", points: 120 },
  { name: "Tzijsxiwr", points: 30 }
]);

console.log(rankingPeople);

// Other solution
const rankingg = people =>
  people
    .sort((a, b) =>
      b.points === a.points ? (b.name > a.name ? -1 : 1) : b.points - a.points
    )
    .map((a, i, arr) =>
      Object.assign(
        a,
        arr[i - 1] && a.points === arr[i - 1].points
          ? { position: arr[i - 1].position }
          : { position: i + 1 }
      )
    );

// Done
