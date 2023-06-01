export let Mycomp = ({ name, age, isMarried }) => {
  console.log({ name, age, isMarried });
  return (
    <div>
      I am Mycomp
      <div>My name is {name}</div>
      <div>My age is {age}</div>
      <div>IsMarried {isMarried}</div>
    </div>
  );
}; // rafce
