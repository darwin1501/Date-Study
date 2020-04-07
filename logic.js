

 const jsonVanilla = {
  "cases": [
	{
	  "age": 38,
	  "case": 1,
	  "case_links": "2",
	  "facility": "San Lazaro Hospital",
	  "nationality": "Chinese",
	  "onset": "2020-01-20T16:00:00.000Z",
	  "other_conditions": "-",
	  "other_information": "First case of COVID-19 in PH",
	  "province": "-",
	  "relationship_links": "wife",
	  "resident_of": "Wuhan, China",
	  "sex": "F",
	  "status": "Recovered,Sat Feb 08 2020 00:00:00 GMT+0800 (Irkutsk Standard Time)",
	  "symptoms": "cough,",
	  "tested_positive": "2020-01-26T16:00:00.000Z",
	  "travel_history": "Yes Wuhan -> Hong Kong -> Cebu -> Dumaguete -> Manila"
	},
	{
	  "age": 44,
	  "case": 2,
	  "case_links": "1",
	  "facility": "San Lazaro Hospital",
	  "nationality": "Chinese",
	  "onset": "2020-01-17T16:00:00.000Z",
	  "other_conditions": "Bacterial infection",
	  "other_information": "First COVID-19-related death in PH; first outside mainland China",
	  "province": "-",
	  "relationship_links": "husband",
	  "resident_of": "Wuhan, China",
	  "sex": "M",
	  "status": "Dead,Sat Feb 01 2020 00:00:00 GMT+0800 (Irkutsk Standard Time)",
	  "symptoms": "fever,cough,sore throat,pneumonia,",
	  "tested_positive": "2020-01-27T16:00:00.000Z",
	  "travel_history": "Yes Wuhan -> Hong Kong -> Cebu -> Dumaguete -> Manila"
	},
	{
	  "age": 60,
	  "case": 3,
	  "case_links": "-",
	  "facility": "ACE Medical Center - Bohol",
	  "nationality": "Chinese",
	  "onset": "2020-01-20T16:00:00.000Z",
	  "other_conditions": "-",
	  "other_information": "Left the Philippines to China before was reported positive",
	  "province": "-",
	  "relationship_links": "-",
	  "resident_of": "Wuhan, China",
	  "sex": "F",
	  "status": "Recovered,Fri Jan 31 2020 00:00:00 GMT+0800 (Irkutsk Standard Time)",
	  "symptoms": "fever,coryza",
	  "tested_positive": "2020-01-28T16:00:00.000Z",
	  "travel_history": "Yes Wuhan -> Hong Kong -> Cebu -> Bohol"
	},
	{
	  "age": 48,
	  "case": 4,
	  "case_links": "-",
	  "facility": "University of the East Ramon Magsaysay Memorial Medical Center",
	  "nationality": "Filipino",
	  "onset": "2020-03-02T16:00:00.000Z",
	  "other_conditions": "-",
	  "other_information": "First case involving a Filipino in the Philippines; employee of Deloitte PH in BGC",
	  "province": "-",
	  "relationship_links": "-",
	  "resident_of": "Taguig City",
	  "sex": "M",
	  "status": "Recovered,Thu Mar 19 2020 00:00:00 GMT+0800 (Irkutsk Standard Time)",
	  "symptoms": "fever,chills",
	  "tested_positive": "2020-01-31T16:00:00.000Z",
	  "travel_history": "Yes Japan -> Manila"
	},
	{
	  "age": 31,
	  "case": 1030,
	  "case_links": "",
	  "facility": "(For Validation at DOH Epidemiology Bureau)",
	  "nationality": "For Validation",
	  "onset": "For Validation",
	  "other_conditions": "",
	  "other_information": "",
	  "province": "?",
	  "relationship_links": "",
	  "resident_of": "?",
	  "sex": "M",
	  "status": "Admitted,For Validation",
	  "symptoms": "undisclosed",
	  "tested_positive": "2020-02-01T16:00:00.000Z",
	  "travel_history": "? ?"
	}
]
}

function showDays(){

		const loop = 7;
		//get last week of january
		for (var i = 0; i <loop; i++) {

			const startDate = new Date("2020-01-26");

			const dateRange = startDate.setDate(startDate.getDate() + i);

			const newDate = new Date(dateRange);

			const jsonData = jsonVanilla;

			const matchDate = jsonData.cases.filter(function(dateGiven) { 
			//get all dates from tested posituve field
			const testPositive = dateGiven.tested_positive || {};

			return testPositive

		}).map(function(getDates){

			const dateArray = getDates.tested_positive
			//look all matching dates from lastweek of january in json
			return newDate === dateArray
		})
		//count result
			const countCases = Object.keys(matchDate).length;
			console.log(newDate+' : '+countCases);
		//expected out put 'date: (number of tested positive on that day)'
	}
}
showDays()