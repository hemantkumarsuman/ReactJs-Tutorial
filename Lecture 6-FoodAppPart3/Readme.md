# useEffect()

# Why do we use state variable?
- Without state variable if we use normal JS variable the variable will be updated but component will not render. So in UI we will not see changed 
  variable.
  Example: If we want to change Login button to logout when clicked on button.
           
           const btnLogin='Login';
           onClick{()=>{
            btnLogin='Logout';
           }}

  When we use above code we will see that in console when we try to print 'btnLogin' button text would have changed to Logout but in UI that change would not have rendered.

  To avoid this we use useState();

# Why we are able to modify "const [btnLoginReact, setBtnLoginReact] = useState('login')" even though state variable is const??
- Every time state variable 'btnLoginReact' is changed , new state variable "const [btnLoginReact, setBtnLoginReact] = useState('logout')" is created 
  behind the scene. 


