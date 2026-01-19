function BuggyComponent({ count }) {
  if (count === 10) {
    throw new Error("App crashed at count 3!");
  }

  return <h3>Counter Value: {count}</h3>;
}

export default BuggyComponent;
