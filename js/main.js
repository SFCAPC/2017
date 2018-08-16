document.addEventListener("DOMContentLoaded",function(){

	// Mobile nav
	const mobileNavButton = document.getElementsByClassName('nav__mobileMenuButton')[0];
	const theNav = document.getElementsByTagName('nav')[0];

	mobileNavButton.addEventListener('click', ()=>{
		console.log('clicky');
		theNav.classList.toggle('open');
	});



	// Show/hide team lists
	const teamLinks = document.getElementsByClassName('teamLink');
	const teamLists = document.getElementsByClassName('people__lists__list__container');

	for (var i = teamLinks.length - 1; i >= 0; i--) {
		let theLink = teamLinks[i];
		let teamName = theLink.getAttribute('list');

		theLink.addEventListener('click', ()=>{
			ss17_showTeamList(teamName);
			console.log('clicked ' + teamName);
		});
	}

	function ss17_showTeamList(list) {

		for (var i = teamLinks.length - 1; i >= 0; i--) {
			let theTeamLink = teamLinks[i];
			let theTeamLinkList = theTeamLink.getAttribute('list');

			// Argument list matches current list
			if(theTeamLinkList === list) {
				theTeamLink.classList.toggle('active');
			} else {
				theTeamLink.classList.remove('active');
			}
		}

		for (var i = teamLists.length - 1; i >= 0; i--) {
			let thisList = teamLists[i];
			let thisListName = thisList.getAttribute('list');

			if(thisListName === list && thisList.classList.contains('hidden')) {
				thisList.classList.remove('hidden');
			} else {
				thisList.classList.add('hidden');
			}
		}
	}



	// Chart: Revenue
	var ctx = document.getElementsByClassName('financials__chart--revenue')[0];
	var data = {
		labels: [
			"Government Grants",
			"Foundation & Corporate Grants",
			"Fundraising Events, net",
			"Donations",
			"Rental Income",
			"In-kind Revenue",
			"Program Service Fees",
			"Other Income"
		],
		datasets: [{
			data: [2450856, 1752801, 642889, 623062, 559374, 321911, 71630, 29241],
			backgroundColor: [
				"#085394",
				"#39BCDD",
				"#47731B",
				"#70B42B",
				"#A154CC",
				"#60327A",
				"#F8C22D",
				"#BF8C00"
			],
			borderWidth: 0
		}]
	};
	var options = {
		defaults: {
			defaultFontSize: 17
		},
		legend: {
			display: false
		},
		tooltips: {
			backgroundColor: 'rgb(255,255,255)',
			bodyFontFamily: 'Montserrat, sans-serif',
			bodyFontColor: 'black',
			bodyFontSize: 20,
			bodyFontStyle: 'normal',
			callbacks: {
				label: function(tooltipItem, data) {
					var datasetLabel = data.labels[tooltipItem.index];
					var number = data.datasets[0].data[tooltipItem.index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					return datasetLabel + ': $' + number;
				}
			}
		}
	};
	var myPieChart = new Chart(ctx,{
			type: 'pie',
			data: data,
			label: '$',
			options: options
	});



	// Chart: Expenses
	var ctx = document.getElementsByClassName('financials__chart--expenses')[0];
	var data = {
		labels: [
			"Children & Family Services",
			"Strategic Partnerships",
			"Fundraising",
			"Management & General",
			"Community Education"
		],
		datasets: [{
			data: [2825979, 1740564, 735756, 614143, 493330],
			backgroundColor: [
				"#641414",
				"#321414",
				"#fa6e6e",
				"#dc1e1e",
				"#a01414"
			],
			borderWidth: 0
		}]
	};
	var options = {
		defaults: {
			defaultFontSize: 20
		},
		legend: {
			display: false
		},
		tooltips: {
			backgroundColor: 'rgb(255,255,255)',
			bodyFontFamily: 'Montserrat, sans-serif',
			bodyFontColor: 'black',
			bodyFontSize: 17,
			bodyFontStyle: 'normal',
			callbacks: {
				label: function(tooltipItem, data) {
					var datasetLabel = data.labels[tooltipItem.index];
					var number = data.datasets[0].data[tooltipItem.index].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
					return datasetLabel + ': $' + number;
				}
			}
		},
	};
	var myPieChart = new Chart(ctx,{
			type: 'pie',
			data: data,
			options: options
	});



	// Close mobile nav when links are clicked in menu
	document.querySelectorAll('.navLink').forEach(link => {
		link.addEventListener('click', function (e) {
			document.getElementsByTagName('nav')[0].classList.remove('open');
		});
	});



	// Photo circle gallery
	setInterval(()=>{
		const photoCollection = document.getElementsByClassName('supportLevels__graphic__photos')[0];
		const photos          = document.getElementsByClassName('supportLevels__graphic__photo');
		const numberOfPhotos  = photos.length;
		let   currentPhoto    = photos[numberOfPhotos - 1];
		let   firstPhoto      = photos[0];

		currentPhoto.classList.add('js--fade');

		setTimeout(()=>{
			photoCollection.insertBefore(currentPhoto, firstPhoto);
			currentPhoto.classList.remove('js--fade');
		}, 2000);

	}, 2000);



	// Close mobile nav when links are clicked in menu
	document.querySelectorAll('.navLink').forEach(link => {
		link.addEventListener('click', function (e) {
			document.getElementsByTagName('nav')[0].classList.remove('open');
		});
	});



	// Smooth scroll
	document.querySelectorAll('.anchorLink').forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const linkName = link.attributes.href.value.substring(1);
			const anchor = document.querySelectorAll(`.anchor[name="${linkName}"`)[0];
			const windowY = window.pageYOffset;
			const anchorY = anchor.getBoundingClientRect().y;

			window.scrollTo({ top: windowY + anchorY, behavior: "smooth" });
		});
	});
});