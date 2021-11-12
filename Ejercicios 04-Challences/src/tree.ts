type Tree<T> = T;

interface Sample {
  name: string | Sample;
  surname?: string | Sample;
  age?: number | Sample;
}

let userDates: Tree<Sample>;

userDates = {
  name: {
    name: "Félix",
    surname: {
      name: "Luis",
    },
  },
  surname: {
    name: {
      name: "Alberto",
      surname: "Pérez",
      age: 23,
    },
  },
  age: 36,
};
