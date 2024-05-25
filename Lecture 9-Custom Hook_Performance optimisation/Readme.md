## Custom Hooks
- We should create different files for custom hooks. Ideally, in utils folder.
- Naming convention - Should be same as hooks name and start with 'use'.

### useEffect()

  const [btnLoginReact, setBtnLoginReact] = useState('login');


  //When we do not use dependency array useEffect() will render everytime component render
  useEffect(()=>{
    console.log('UseEffect rendered');
  });

  //When useEffect() called with empty dependency useEffect() will be called just once at 1st render of component
  useEffect(()=>{
    console.log('useEffect with empty dependency');
  },[]);

  //When useEffect() called with some dependency array useEffect() will be called when dependency changes
  //In below example whenever btnLoginReact button changes, useEffect() will be called
  useEffect(()=>{
    console.log('Useeffect with dependency');
  },[btnLoginReact]);