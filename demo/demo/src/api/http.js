var Http = {
	// HOST:'./api',
	HOST:'https://abundant.xjkrfx.net',//填写服务端域名
	API_URL:{ 
		'LOGIN':'/api/m1/auth/login', 
		'SHOPMSG': "/api/m1/shop/view" /*商户红包*/,
		'FINDINDEX': "/api/m1/user-send/index", /*发现-首页*/
		'FAVOUR': "/api/m1/user-send/favour", /* 发现-点赞*/
		'INFORM': "/api/m1/user-send/inform" /* 发现-举报*/,
		'DETAILS': "/api/m1/user-send/view" /*发现-详情*/,
		'REPLY': "/api/m1/user-send/reply" /* 发现-详情回复*/,
		'DELREPLY': "/api/m1/user-send/del-reply" /*发现-删除回复*/,
		'SHOPREPLAY':'/api/m1/shop/reply',/*商铺回复评论*/ 
		'DELSEND':'/api/m1/user-send/del-send',/*删除动态*/ 
		'SHOPFAVOUR':'/api/m1/shop/favour',/*商户点赞 */
		'DELSHOPREPLY':'/api/m1/shop/del-reply'/*删除商户回复*/
    }
};
export default Http;