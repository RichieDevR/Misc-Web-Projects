const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
	{
		name: 'Maria M.',
		position: 'Verified Buyer',
		photo: "https://randomuser.me/api/portraits/women/46.jpg",
		text: "Approximately two weeks into the product I noticed an improved sense of wellness and my breathing seemed more alive.At any rate, I love that the product is free of fillers and cheap ingredients found with so many so-called natural supplements.Give it a try !I think you'll become a quick fan like myself.",
	}, {
		name: 'June C.',
	position: 	'Verified Buyer',
		photo: 'https://randomuser.me/api/portraits/women/44.jpg',
		text: "I spend my entire work day in front of a computer drafting financial analysis reports. By the end of the day I'm normally hopped up on coffee and junk food and feeling really spent. I've been taking Umzu blood flow support for three weeks now. I only drink one cup of coffee in the morning instead of 10 cups per day. I'm more alert mid afternoon and I'm religiously drinking water. Since the shut down of gyms I've made it a point to walk at least four times per week. This product has changed my life. My energy levels are higher. I'm sleeping well. I don't have that mid-afternoon lull anymore. I'm a customer for life!",
	},
	{
		name: 'Iida N.',
		position: 'Verified Buyer',
		photo: 'https://randomuser.me/api/portraits/women/68.jpg',
		text: "I've been taking Redwood Nitric Oxide Booster for over two months now. Approximately two weeks into the product I noticed an improved sense of wellness and my breathing seemed more alive (if that makes any sense). At any rate, I love that the product is free of fillers and cheap ingredients found with so many so called natural supplements. Give it a try! I think you'll become a quick fan like myself.",
	},
	{
		name: 'Renee S.',
		position: 'Verified Buyer',
		photo: 'https://randomuser.me/api/portraits/women/65.jpg',
		text: "I researched this product at nauseum! Finally, I ordered a 3 month supply. I started taking the product and I know more natural energy,better mood,and my blood pressure when down to 104/74! I know results may vary, but if your on the fence about thinking of trying this product. In my opinion, please don't hesitate to try this amazing product! I'm not a believer and a user for life!",
	},
	{
		name: 'Jonathan N.',
		position: 'Verified Buyer',
		photo: 'https://randomuser.me/api/portraits/men/43.jpg',
		text: "Has greatly reduced the numbness and tingling in my feet associated with a recent heart attack. I'll even tell my doctor about it!",
	},
	{
		name: 'Sasha H.',
		position: 'Verified Buyer',
		photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
		text: "It has been good. I feel like my BP is slightly better and an improvement in perfomance in the bedroom. I'm 62, no meds, enjoying a healthy relationship with my wife 2 to 3 times a week. Occasionally multiple times in 24hrs. What's to complain about??? Thank you",
	},
	{
		name: 'Veeti S.',
		position: 'Verified Buyer',
		photo: 'https://randomuser.me/api/portraits/men/97.jpg',
		text: "I have been taking Redwood for months now and I'm starting on my 2nd bottle. And I feel so energetic daily in 46 years old married for 20 years have 5 kids and been at my job for 19 years i get up and work up at 3am in the morning then work all day and let me tell you before I was using Redwood I was struggling daily with work and kid's...Now I can't stop being more active i have more energy with the kids hitting the gym harder work goes by fast and POW BOOM BANG in the Bed room!!! And one more thing my varicose vines are going away...",
	},
]

let idx = 1;

function updateTestimonial() {
	const {
		name,
		position,
		photo,
		text
	} = testimonials[idx];
	testimonial.innerHTML = text;
	userImage.src = photo;
	username.innerHTML = name;
	idx++;
	if (idx > testimonials.length - 1) {
		idx = 0
	}
}

setInterval(updateTestimonial, 10000)