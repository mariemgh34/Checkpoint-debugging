function Counter({ count, onIncrease }) {
  return (
    <section className="card">
      <h2>Counter</h2>

      <p className="counter">
        {count}
      </p>

      <button onClick={onIncrease}>
        Increase
      </button>
    </section>
  );
}

export default Counter;