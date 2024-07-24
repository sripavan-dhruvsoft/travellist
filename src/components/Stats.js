export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some cart items to the list</em>
      </p>
    );

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got every thing ready to go "
          : `You have ${numItems} items on your list and You have already packed  
        ${itemsPacked} (${percentage})%`}
      </em>
    </footer>
  );
}
