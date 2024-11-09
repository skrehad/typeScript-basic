{
  const information = <T extends { name: string; id: number; skills: string }>(
    developer: T
  ) => {
    return developer;
  };

  const data = information({
    name: "Rehad",
    id: 1,
    skills: "TypeScript",
    emni: "emni",
  });
  const data2 = information({
    name: "Rehad",
    id: 1,
    skills: "TypeScript",
  });
  const data3 = information({
    name: "Rehad",
    id: 1,
    skills: "TypeScript",
  });

  console.log(data);
}
