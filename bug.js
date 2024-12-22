```javascript
// Incorrect usage of the useState hook inside a loop
const [items, setItems] = useState([]);

for (let i = 0; i < 5; i++) {
  useState(() => {
    // this is wrong; you cannot use useState inside a loop
    return i; // This will cause unexpected behavior
  });
}
```