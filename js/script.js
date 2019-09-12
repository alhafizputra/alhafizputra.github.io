// event pada saat link diklik

$('.page-scroll').on('click', function(e) {
	// console.log('ok')

	// ambil isi href
	var tujuan = $(this).attr('href');
	// console.log(tujuan)

	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	// console.log(elemenTujuan);

	//offset: jarak antara elemen/section dengan top
	// console.log(elemenTujuan.offset().top);

	//scrollTop: jarak antara body dengan top
	// console.log($('html,body').scrollTop());

	//pindahkan scroll
	// $('html,body').scrollTop(elemenTujuan.offset().top);
	
	//pindahkan scroll animate/ halus
	//swing, linear, easing
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	//supaya pas diklik href nya tidak jalan
	e.preventDefault(); 

});

$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul')
});


// parallax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// console.log(wScroll); 

	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	})

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	})

	// portfolio
	// $('.portfolio').offset().top : jarak antara portfolio ke atas
	if (wScroll > $('.portfolio').offset().top - 320) {
		// console.log('ok');
		
		//mencari semua thumbnail (ada 6) dijalankan setiap thumbnail ke i, 
		// set timeout ke 300ms * indeks untuk setiap thumbnail (i) tampilkan muncul
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				// console.log('ok');
				$('.portfolio .thumbnail').eq(i).addClass('muncul'); 
			}, 300 * (i+1));
		});

		
	}


});

// $("#btnsumbit").click(function(e){
// // 	console.log('ok');
// 	var name = $('#name').val();
// 	var email = $('#email').val();
// 	var telp = $('#telp').val();
// 	var subject = $('#subject').val();
// 	var message = $('#message').val();
// 	console.log(name);
// 	console.log(email);
// 	console.log(telp);
// 	console.log(subject);
// 	console.log(message);
// 	alert("name: " + $("#name").text());
// 	e.preventDefault();
// });

function myFunction() {

	console.log('ok');
	var name = $('#name').val();
	var email = $('#email').val();
	var telp = $('#telp').val();
	var subject = $('#subject').val();
	var message = $('#message').val();
	console.log(name);
	console.log(email);
	console.log(telp);
	console.log(subject);
	console.log(message);



	// var API_KEY = 'c27bf672-4e37a8aa';
	// var DOMAIN = 'sandboxb83e81a7fd2549b1a50c32a47505bc6b.mailgun.org';
	// var mg = mailgun.client({username: 'api', key: API_KEY});
	// // var mailgan = mailgun.client({apiKey: API_KEY, domain: DOMAIN});

	// const data = {
	// 	from: 'Excited User <me@samples.mailgun.org>',
	// 	to: 'alhafizputra01@gmail.com',
	// 	subject: 'Hello',
	// 	text: 'Testing some Mailgun awesomeness!'
	// };

	// // console.log(mailgun)

	// mg.messages.create(DOMAIN, {
	// 	from: "Excited User <mailgun@sandbox-123.mailgun.org>",
	// 	to: ["'alhafizputra01@gmail.com"],
	// 	subject: "Hello",
	// 	text: "Testing some Mailgun awesomness!",
	// 	html: "<h1>Testing some Mailgun awesomness!</h1>"
	// })
 //  .then(msg => console.log(msg)) // logs response data
 //  .catch(err => console.log(err)); // logs any error

 //   mandrill('/messages/send', {
 //        message: {
 //            to: [{email: _email , name: _name}],
 //            from_email: 'noreply@yourdomain.com',
 //            subject: _subject,
 //            text: _message
 //        }
 //    }, function(error, response){
 //        if (error) console.log( error );
 //        else console.log(response);
 //    });

 
// 	$.ajax({
// 		'type': 'POST',
// 		'url': 'https://mandrillapp.com/api/1.0/messages/send.json',
// 		'data': {
// 			'key': 'cf11553e64a833ff382f7b0d58ba479f-us4',
// 			'message': {
// 				'from_email': 'coputra0@gmail.com',
// 				'to': [
// 				{
// 					'email': 'alhafizputra01@gmail.com',
// 					'name': 'Hafiz',
// 					'type': 'to'
// 				}
// 				],
// 				'autotext': true,
// 				'subject': 'YOUR SUBJECT HERE!',
// 				'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
// 			}
// 		}
// 	}).done(function(response) {
// 	console.log(response); // if you're into that sorta thing
// });
console.log('ok');

alert("Thanks for contacting me!!");
}

function myFunctionn() {
	var API_KEY = 'c27bf672-4e37a8aa';
	var DOMAIN = 'sandboxb83e81a7fd2549b1a50c32a47505bc6b.mailgun.org';
	var mg = mailgun.client({username: 'api', key: API_KEY});
	// var mailgan = mailgun.client({apiKey: API_KEY, domain: DOMAIN});
	console.log('ok');
	mg.messages.create(DOMAIN, {
		from: "mailgun@sandbox-123.mailgun.org",
		to: ["alhafizputra01@gmail.com"],
		subject: "Hello",
		text: "Testing some Mailgun awesomness!",
		html: "<h1>Testing some Mailgun awesomness!</h1>"
	})
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error

  console.log('ok');

// alert("Thanks for contacting me!!");
}