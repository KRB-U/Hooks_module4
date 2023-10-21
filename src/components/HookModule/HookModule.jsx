import { useToggle } from 'components/Hooks/useToggle';
import { ModalA } from 'components/ModalA/ModalA';
// import { useState, useEffect } from 'react';

const ExplorerView = () => {
  // const [value, setValue] = useState(0);

  // const [firstValue, setFirstValue] = useState(0);
  // const [secondValue, setSecondValue] = useState(0);

  // useEffect(() => {
  //   // document.title = `You clicked ${value} times`;

  //   // console.log(value);
  //   // console.log('Updating phase: same when componentDidUpdate runs');
  //   console.log(firstValue + secondValue);
  // }, [firstValue, secondValue]);

  // useEffect(() => {
  //   console.log('Mounting phase: same when componentDidMount runs');

  //   return () => {
  //     console.log('Unmounting phase: same when componentWillUnmount runs');
  //   };
  // }, []);
  //
  // 1. Run effect only on mount to init some library
  // useEffect(() => {
  //   initThirdPartyLibrary();
  // }, []);

  // // 2. Run effect only when username prop changes
  // useEffect(() => {
  //   fetchUser(username);
  // }, [username]);

  // // 3. Run effect on value prop change
  // useEffect(() => {
  //   // Do stuff when value prop changes
  // }, [value]);

  // // 4. Run effect on isLoggedIn state change
  // useEffect(() => {
  //   // Do stuff when isLoggedIn state changes
  // }, [isLoggedIn]);

  // // 5. Run effect on mount and clean up on unmount
  // useEffect(() => {
  //   const handleKeyDown = e => console.log('keydown event: ', e);
  //   document.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101',
  //     }}
  //   >
  // {
  /* <span>{value}</span> */
  // }
  // {
  /* <button onClick={() => setValue(value + 1)}>Zero: {value}</button> */
  // }

  // {
  /* <button onClick={() => setFirstValue(firstValue + 1)}>
        firstValue: {firstValue}
      </button>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        secondValue: {secondValue}
      </button> */
  // }
  // </div>
  // );

  const { isOpen, close, toggle } = useToggle();

  return (
    <>
      {/* <button onClick={isOpen ? close : open}> */}
      <button onClick={toggle}>{isOpen ? 'Close modal' : 'Open modal'}</button>
      {isOpen && <ModalA isOpen={isOpen} onClose={close} />}
    </>
  );
};

export { ExplorerView };
