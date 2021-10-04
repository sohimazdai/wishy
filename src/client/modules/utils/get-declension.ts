export default function getDeclension(
  oneNominative: string,
  oneGenitive: string,
  severalGenitive: string,
  number: number,
): String {
  const declensions = [oneNominative, oneGenitive, severalGenitive];
  const cases = [2, 0, 1, 1, 1, 2];

  return declensions[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
