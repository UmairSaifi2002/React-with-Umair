import { useState, useEffect } from 'react'; // React ke useState aur useEffect hooks import karte hai
import './App.css'; // CSS file import karte hai

function App() {
  const [data, setData] = useState(null); // data state ko null se initialize karte hai
  const url = 'http://jsonplaceholder.typicode.com/posts'; // API ka URL define karte hai

  // fetchData naam ka ek async function define karte hai
  const fetchData = async () => {
    // try {
    //   const response = await fetch(url); // URL se data fetch karte hai
    //   if (!response.ok) { // agar response nahi ok hai to error throw karte hai
    //     throw new Error('Network response was not ok');
    //   }
    //   const jsonData = await response.json(); // response ko json format mein parse karte hai
    //   setData(jsonData); // parse kiye gaye data ko state mein set karte hai
    // } catch (error) {
    //   console.error('Error fetching data:', error); // agar koi error hoti hai to console mein log karte hai
    // }
    const response = await fetch(url); // URL se data fetch karte hai
    const jsonData = await response.json(); // response ko json format mein parse karte hai
    setData(jsonData); // parse kiye gaye data ko state mein set karte hai
  };

  // useEffect(() => { // useEffect hook use karte hai
  //   fetchData(); // component mount hone par fetchData function call karte hai
  // }, [url]); // url change hone par bhi fetchData function call hoga

  console.log(data); // console mein data ko log karte hai

  return (
    <> {/* JSX return karte hai */}
      <div>
        <h1>Data from API</h1> {/* ek heading ko render karte hai */}
        {data ? ( // agar data available hai to
          <div className='m-3 p-3 rounded-2xl bg-purple-900 text-white flex flex-col justify-center items-center'>
            {data.map((item) => ( // data ko map karte hai aur ek ek item ko render karte hai
              <div className='m-2 p-2 rounded-2xl bg-purple-500 text-2xl items-start' key={item.id}> {/* / har item ke liye ek unique key provide karte hai */}
                <div>title : {item.title}</div> {/* item ka title ko render karte hai */}
                <div>body : {item.body}</div> {/* item ka body ko render karte hai */}
                <hr /> {/* ek horizontal line ko render karte hai */}
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p> // agar data nahi available hai to "Loading..." ko render karte hai
        )}
      </div>
      <button onClick={fetchData}>get data</button> {/* ek button ko render karte hai jise click karne par fetchData function call hoga */}
    </>
  );
}

export default App; // App component ko export karte hai