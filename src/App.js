import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    let calculatedAge = yearsDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Enter your birth date</label><br/>
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} /><br/>
      <button onClick={calculateAge}>Calculate Age</button><br/>
      {age && <p>You are {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
