$(window).scroll(function () {
	const currentScroll = $(this).scrollTop();

	const stickyNav = $('.sticky_nav').offset().top;
	// const scDesign = $('.sc-design').offset().top;
	if (currentScroll >= stickyNav) {
		$('.sticky_nav').addClass('scrolled');
	} else {
		$('.sticky_nav').removeClass('scrolled');
	}

	// if (currentScroll >= scDesign - $(window).height()) {
	//   $('.sc-video .video-area').addClass('sticky');
	// } else {
	//   $('.sc-video .video-area').removeClass('sticky');
	// }
})

$(function () {
	//페이지 로드 후 애니메이션

	//스크롤트리거 플러그인 불러오기
	gsap.registerPlugin(ScrollTrigger);

	const canvas = document.querySelector('#earphone');
	const ctx = canvas.getContext('2d');

	const frameCount = 65;

	const currentFrame = (idx) => {
		// return `./assets/images/canvas/${idx.toString()}.png`;
		return `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${idx.toString().padStart(4, '0')}.png`;
	};

	const images = [];
	const card = {
		frame: 0,
	};

	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = currentFrame(i + 1);
		images.push(img);
	}

	gsap.to(card, {
		frame: frameCount - 1,
		snap: 'frame',
		ease: 'none',
		scrollTrigger: {
			trigger: '.sec_intro .sticky_inner',
			scrub: 1,
			start: '-52px top',
			end: '108% top',
			pin: true
		},
		onUpdate: render,
	});

	images[0].onload = render;

	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(images[card.frame], 0, 0);
	}

	// 페이지 시작 애니메이션
	const loadMotion = gsap.timeline();
	loadMotion
		.to(".sec_intro .canvas_group canvas", { duration: 0.2, opacity: 1 }, '+=0.7')
		.to(".sec_intro .intro_title, .sec_intro .btn_list,.sec_intro .intro_ttl", { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: Power4.easeInOut }, '+=0.2');


	//intro 타이틀, 왓치리스트 오파시티
	gsap.to(".sec_intro .intro_inner", {
		opacity: 0,
		scrollTrigger: {
			trigger: ".sec_intro",
			start: " 15% top",
			end: "28% top",
			scrub: 1,
			// markers: true
		},
	});

	//intro title 사이즈,오파시티
	gsap.set('.sec_intro .intro_ttl', { scale: 1 })//로딩 gsap와 겹치면서 발생하는 모션 수정
	const introTtlAni = gsap.timeline({
		scrollTrigger: {
			trigger: ".sec_intro",
			start: "-96px top",
			end: "35% top",
			scrub: true,
		}
	});

	introTtlAni
		.to(".sec_intro .intro_ttl", { duration: 1, scale: 1.15 })
		.to(".sec_intro .intro_ttl", { opacity: 0 }, "-=0.5");

	//intro 듣는다는 것을 다시 생각하다
	const secSubAni = gsap.timeline({
		scrollTrigger: {
			trigger: ".sec_intro",
			start: "39% top",
			end: "55% top",
			scrub: 1,
			markers: true

		}
	});
	secSubAni
		.to(".sec_intro .sub_text", { duration: 1, scale: 0.92, opacity: 1 })
		.to(".sec_intro .sub_text", { duration: 1, scale: 1, opacity: 0 });


	// 동영상 영역
	const valuebgAni = gsap.timeline({
		scrollTrigger: {
			trigger: ".sc_video",
			start: "20% top",
			end: "70% top",
			scrub: true,
			// markers: true
		}
	});
	valuebgAni
		.to(".sc_video .video_player_wrap", { duration: 0.1, opacity: 1 })
		.to(".sc_video .video_player_wrap", { duration: 0.2, opacity: 0 }, "4")
	// .to(".sc_video .video_frame .btn_control", { opacity: 0 }, "-=0.3");


	//동영상 컨텐츠
	/** 
	* @i = 인덱스
	* @l = 엘리먼트
	*/
	videoContentItem = document.querySelectorAll('.sc_video .content_item');
	let i = 0;
	videoContentItem.forEach(l => {
		const opaChange = gsap.timeline({
			scrollTrigger: {
				trigger: l,
				start: "0% 80%",
				end: "130% 80%",
				scrub: 1,
			}
		});
		if (i === 4) {
			// 마지막 문장은 opacity 1 유지 시키기 위함
			opaChange.to(l, { opacity: 1 }, "-=0.2")
		} else {
			opaChange.to(l, { opacity: 1 }, "-=0.4")
				.to(l, { duration: 0.2, opacity: 0.15 })
		}
		i++;
	});
})