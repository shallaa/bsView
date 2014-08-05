module.exports.ui = (function(){
var mobile = bs.DETECT.device == 'mobile', r = bs.rand, rf = bs.randf, tb = mobile ? 'bottom' : 'top',
inited, init = function(){
	inited = 1,
	bs.Css('#bsUI_toast').S( 'color', '#eeff41', 'overflow', 'hidden', 'text-align', 'center', 'position', 'fixed', tb, 0, 'background', '#2b2b2f', 'z-index', 999999999 );
	bs.Css('.bsUI_toastParticle').S( 'border-radius', mobile ? 15 : 40, 'position','fixed' );
}; 
return {
	toast:function( msg, time, durationTime, ease, parent ){
		var toast = function(){
			if( arguments[0] ) toastQue.push(arguments);
			if( toasted || !toastQue.length ) return;
			toasted = 1, curr = toastQue.pop(), phase = 1,
			bs.ANI.style( dom.S( 'display', 'block', 'html', curr[0], 'this' ),
				'opacity', 1, 'width', 100, 'left', 0, 'border-radius', 0,
				'time', curr[1] || dTime, 'ease', curr[3] || 'linear', 'end', end,
				'update', particle
			);
		},
		end = function(){
			phase = 0,
			bs.ANI.style( dom.S( 'border-radius', 0, 'opacity', 1,'width', 100, 'left', 0, 'this' ), 
				'border-radius', 100, 'opacity', 0, 'width', 0, 'left', 50, 'time', curr[1] || dTime, 'ease', curr[3] || 'linear', 'delay', curr[2] || 1.5, 
				'end', hide, 'update', particle
			);
		},
		hide = function(){dom.S( 'border-radius', 100, 'opacity', 0, 'width', 0, 'left', 50, 'display', 'none' ), toasted = 0, toast();},
		particle = function( target, rate, T ){
			var i, x, y, s, s0;
			rate = phase ? rate : 1 - rate, mobile ? ( i = r( 1, 2 ), s0 = 5 ) : ( i = r( 2, 5 ), s0 = 10 );
			while(i--){
				bs.ANI.style(
				bs.Dom('<div class="bsUI_toastParticle"></div>' ).S( 
					'width', s0, 'height', s0, 'background', 'rgb(' + r( 100, 200 ) + ','+r( 100, 200 ) + ',' + r( 100, 200 ) + ')',
					tb, y = mobile ? r( 5, 15 ) : r( 10, 40 ), 'left', ( x = ( 1 + ( i % 2 ? -rate : rate ) ) * 50 ) + ':%', 'opacity', 1, 
					'<', 'body', 'this'
				),
				'left', r( -10, 10 ) + x, tb, ( mobile ? r( -50, 50 ) : r( -50, 70 ) ) + y,
				'width', s = mobile ? r( 10, 15 ) : r( 20, 40 ), 'height', s, 'opacity', 0, 
				'time', rf( .5, 1.5 ), 'end', particleEnd
			);

			}
		},
		particleEnd = function(target){target.S(null);},
		dom = bs.Dom('<div id="bsUI_toast"></div>').S( 'border-radius', 0, 'left', '50:%', 'width', '0:%', 'display', 'none', 'opacity', 0, '<', 'body', 'this' ),
		toasted, toastQue = [], curr, phase, dTime = mobile ? .35 : .5;
		if( !inited ) init();
		( ui.toast = toast ).apply( this, arguments );
	}
};
})();