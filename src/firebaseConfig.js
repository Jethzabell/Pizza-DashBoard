import Firebase from 'firebase'

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCu17V-7udeZr-kT8wFKEa_PYVOrM4YHv8",
        authDomain: "pizza-planet-57b2a.firebaseapp.com",
        databaseURL: "https://pizza-planet-57b2a.firebaseio.com",
        projectId: "pizza-planet-57b2a",
        storageBucket: "",
        messagingSenderId: "619883433471"
    };
    
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')