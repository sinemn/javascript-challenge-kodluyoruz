document.addEventListener('DOMContentLoaded' , () => {

	//assistan grouping
	const assistants = data.filter((person) => person.assistant == true);

	//Adding same grouped + non-assistant students as a members property
	for (const index in assistants) {
  	 let members = data.filter((student) => student.group == assistants[index].group && student.assistant == false);
  	 assistants[index].members = members;
	assistants[index].group == 'Fuscia' ? assistants[index].group='Fuchsia':''
	}

	console.log(assistants)

	//Checking index of  duplicate property value
	function checkDuplicate(names) {
		
		var namesArr = names.map(function(item) {return item.name});
		var isnames = namesArr.some(function(item,idx) {
			let index = namesArr.indexOf(item) != idx ? namesArr.indexOf(item) : '';
			//console.log(index)
		});

	// removing duplicate function will be here

	}
	checkDuplicate(data);

	// Mapping member names and creating list

	function memberName(assistant) {
		let name = assistant.members.map((student) => student.name);
		//console.log(assistant.members)
	

		return `
		<h6 class='cards__box__title'>Members</h6>
		<ul class='cards__box__list'>
		${name.map(function(name) {
			return `
			<li >${name}</li>
			`
		}).join('')}
		</ul>
		`

	}

	//Mapping assistant names and groups from data

	function memberCard(assistant) {
		
		let group = assistant.members.map((student) => student.group);
		 group[0] == 'Fuscia' ? group[0]='Fuchsia' : ''
		 group[1] == 'Fuscia' ? group[1]='Fuchsia' :''
		 //console.log(group)
		
		
		
		return `<div  class='
		cards__box'>
		<h4  style='color: ${group[0]} ; font-size: 20px ' class='cards__box__group'>${assistant.group}<h4>
		<h6 class='cards__box__assistant'>${assistant.name}</h6>
		${assistant.group == group[0] ? 
		memberName(assistant)
		 : ''}
		
		
		
		</div>
		`
		
	}

	document.getElementById('cards').innerHTML = `
	${assistants.map(memberCard).join('')}
	`
	


})


let data = [
	{
		"id": 1,
		"name": "Ahmed Bustani",
		"assistant": true,
		"group": "Orange"
	},
	{
		"id": 2,
		"name": "Baris Tunar",
		"assistant": true,
		"group": "Crimson"
	},
	{
		"id": 3,
		"name": "Burak Caglar",
		"assistant": true,
		"group": "Khaki"
	},
	{
		"id": 4,
		"name": "ah. fawad",
		"assistant": true,
		"group": "Pink"
	},
	{
		"id": 5,
		"name": "Furkan KILI??ER",
		"assistant": true,
		"group": "Aquamarine"
	},
	{
		"id": 6,
		"name": "Alperen Aslan",
		"assistant": true,
		"group": "Turquoise"
	},
	{
		"id": 7,
		"name": "joudi bitar",
		"assistant": true,
		"group": "Yellow"
	},
	{
		"id": 8,
		"name": "K??bra ??zdem",
		"assistant": true,
		"group": "Goldenrod"
	},
	{
		"id": 9,
		"name": "Aycan",
		"assistant": true,
		"group": "Fuscia"
	},
	{
		"id": 10,
		"name": "Aykut ??ahin",
		"assistant": true,
		"group": "Puce"
	},
	{
		"id": 11,
		"name": "S. Zahit ACAR",
		"assistant": true,
		"group": "Maroon"
	},
	{
		"id": 12,
		"name": "Tugay T??rk",
		"assistant": true,
		"group": "Purple"
	},
	{
		"id": 13,
		"name": "Abdurrahman Seyido??lu",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 14,
		"name": "Ahmed Tab??o",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 15,
		"name": "Alaa Alaff",
		"assistant": false,
		"group": "Fuscia"
	},
	{
		"id": 16,
		"name": "ASSKOUR Imane",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 17,
		"name": "Aydo??an G??kberk",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 18,
		"name": "BAHADD??N ALMUHAMMED",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 19,
		"name": "B????ra Bilgin",
		"assistant": false,
		"group": "Maroon"
	},
	{
		"id": 20,
		"name": "Chimnaz Vahabzade",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 21,
		"name": "??a??atay Sar??o??lan",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 22,
		"name": "dana alhameed",
		"assistant": false,
		"group": "Puce"
	},
	{
		"id": 23,
		"name": "Delfin ??zt??rk",
		"assistant": false,
		"group": "Purple"
	},
	{
		"id": 24,
		"name": "Ebubekir Karata??",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 25,
		"name": "Ela Ya??mur ",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 26,
		"name": "ELNAZ HAMEDIBAZAZ",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 27,
		"name": "Fatma ??ehito??lu",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 28,
		"name": "Feras Alkilani",
		"assistant": false,
		"group": "Fuscia"
	},
	{
		"id": 29,
		"name": "Gizem Nur Korkmaz",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 30,
		"name": "Halil ??brahim Badem",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 31,
		"name": "Hasan ALKHALAF",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 32,
		"name": "Hatice S??r??ml??",
		"assistant": false,
		"group": "Purple"
	},
	{
		"id": 33,
		"name": "IMAN ALABID",
		"assistant": false,
		"group": "Maroon"
	},
	{
		"id": 34,
		"name": "I????l ??zkaynak",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 35,
		"name": "??brahim Halil D????",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 36,
		"name": "??lkay ??itak",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 37,
		"name": "Kenan Mirzeyev",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 38,
		"name": "Melisa G??rdal",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 39,
		"name": "Merve ??ahin",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 40,
		"name": "MHD NABIL ARAR",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 41,
		"name": "Muhammet B??LG??N",
		"assistant": false,
		"group": "Orange"
	},
	{
		"id": 42,
		"name": "Nurgeldi Atamyradov",
		"assistant": false,
		"group": "Khaki"
	},
	{
		"id": 43,
		"name": "Ozan Ali T??RKYILMAZ",
		"assistant": false,
		"group": "Pink"
	},
	{
		"id": 44,
		"name": "??zge Yurdusev",
		"assistant": false,
		"group": "Goldenrod"
	},
	{
		"id": 45,
		"name": "Parahat Nepesov",
		"assistant": false,
		"group": "Puce"
	},
	{
		"id": 46,
		"name": "Rined haj osman",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 47,
		"name": "Serkan ??elik",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 48,
		"name": "Sinem Nurio??lu",
		"assistant": false,
		"group": "Aquamarine"
	},
	{
		"id": 49,
		"name": "??ifa Hasani",
		"assistant": false,
		"group": "Turquoise"
	},
	{
		"id": 50,
		"name": "Yasemin Pa??ao??lu",
		"assistant": false,
		"group": "Yellow"
	},
	{
		"id": 51,
		"name": "Yusuf sabbagh",
		"assistant": false,
		"group": "Crimson"
	},
	{
		"id": 52,
		"name": "Nurgeldi Atamyradov",
		"assistant": false,
		"group": "Yellow"
	}
];
// console.log('????', data)


