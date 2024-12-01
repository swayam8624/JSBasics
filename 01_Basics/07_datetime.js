// Dates

let mydate = new Date()
console.log(mydate); //2024-12-01T07:02:53.258Z
console.log(mydate.toString())
console.log(mydate.toDateString() +"\n"+ mydate.toLocaleDateString() +"\n"+ mydate.toISOString() +"\n"+ mydate.toLocaleString())
console.log(typeof mydate);

let credate = new Date(2024 , 2 , 23 , 23 , 23)
console.log(credate.toString())
// months start from 0 in js , the paramters are (year , month , day , hour , min , sec , millisec)

let newdate = new Date("2024-06-08")
console.log(newdate.toLocaleString());

let newdate1 = new Date("01-14-2024")
console.log(newdate1.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp); //return millisecond since 1st jan , 1970
console.log(newdate1.getTime()); //return millisecond since 1st jan , 1970
console.log(Math.floor(Date.now()/1000))


/*
Component	            Local	                                    UTC
                Get	                Set	                Get	                    Set

Year	        getFullYear()	    setFullYear()	    getUTCFullYear()        setUTCFullYear()
Month	        getMonth()	        setMonth()	        getUTCMonth()	        setUTCMonth()
Date (of month)	getDate()	        setDate()	        getUTCDate()	        setUTCDate()
Hours	        getHours()	        setHours()	        getUTCHours()	        setUTCHours()
Minutes	        getMinutes()	    setMinutes()	    getUTCMinutes()	        setUTCMinutes()
Seconds	        getSeconds()	    setSeconds()	    getUTCSeconds()	        setUTCSeconds()
Milliseconds	getMilliseconds()	setMilliseconds()	getUTCMilliseconds()	setUTCMilliseconds()
Day (of week)	getDay()	        N/A	                getUTCDay()	            N/A
*/

// Date-only form: YYYY, YYYY-MM, YYYY-MM-DD
// Date-time form: one of the above date-only forms, followed by T, followed by HH:mm, HH:mm:ss, or HH:mm:ss.sss. Each combination can be followed by a time zone offset.
// For example, "2011-10-10" (date-only form), "2011-10-10T14:48:00" (date-time form), or "2011-10-10T14:48:00.000+09:00" (date-time form with milliseconds and time zone) are all valid date time strings.

console.log(newdate1.toLocaleString('default' , {
    weekday: "long"
}))