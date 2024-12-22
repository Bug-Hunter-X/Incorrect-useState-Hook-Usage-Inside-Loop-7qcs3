```javascript
// Correct usage of the useState hook
const [items, setItems] = useState([]);

useEffect(() => {
  const newItems = [];
  for (let i = 0; i < 5; i++) {
    newItems.push(i);
  }
  setItems(newItems);
}, []);
```