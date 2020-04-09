import React from 'react';

const initState = {
	items      : [
		{
			id    : 1,
			title : 'Summer Day',
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88241654_136875077654303_6528774686701563095_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=2plby783w9YAX-jLGjq&oh=343b2cc1af2c4af56d49ea0cd88a74a2&oe=5EB5F7C8',
			price : '$110'
		},
		{
			id    : 2,
			title : 'France Flowers',
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/89719921_137176031120608_6358848434948245568_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=UAB4RY6I-AkAX-olGeG&oh=a5aae5a09a9e361733fb8d40c709f17a&oe=5EB6BA30',
			price : '$80'
		},
		{
			id    : 3,
			title : 'Best Piece EVER',
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/90402775_528501921419528_7090139916166921024_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=ZZc07JzEoN4AX-h04UG&oh=514c2a3c514ffeb13122e70d7e7c4005&oe=5EB2D25B',
			price : '$120'
		},
		{
			id    : 4,
			title : "Ben's Space Fantasy",
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/89267930_189250302372452_6125024933299067972_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=TK-Y91rWBHEAX-tycFj&oh=0b6fc8bc75b8a51090d030f2e20ed380&oe=5EB64B49',
			price : '$260'
		},
		{
			id    : 5,
			title : 'Freakin Amazing Geanie',
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88944837_2602601916640053_8934598631432112492_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=NexCIgRjypYAX8zXLUp&oh=b087850bfd437208fc94c4ea84e07e42&oe=5EB59D11',
			price : '$160'
		},
		{
			id    : 6,
			title : 'Baby Miles Masterpiece',
			desc  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
			url   :
				'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/87229237_195731621642575_3351082763900003583_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=KHevub0CvDUAX_VxpTk&oh=842fd90ef48881777b7b34c693d79ffa&oe=5EB6F4FB',
			price : 90
		}
	],
	addedItems : [],
	total      : 0
};

const cartReducer = (state = initState, action) => {
	return state;
};

export default cartReducer;
