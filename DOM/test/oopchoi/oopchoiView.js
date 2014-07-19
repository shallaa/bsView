/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 14. 7. 19
 * Time: 오후 12:56
 * To change this template use File | Settings | File Templates.
 */
bs.cls('Button', function (fn, clsfn, bs) {
    fn.NEW = function (key) {
        this.ID = Math.floor(Math.random() * 10);
        this.label;
        this.width;
        this.height;
        this.fillStyle;
        this.x = 0;
        this.y = 0;
        this.rotation;
        this.alpha;
        this.fontSize;
        this.fontFamily;
        this.fontColor;
        this.lineWidth;
        this.strokeStyle;
        this.fontX = 0;
        this.fontY = 0;

        //fn.context;
    }

    fn.destroy = function () {
        this.END();
    }

    // 그리기
    fn.draw = function(){
        fn.context.beginPath();
        fn.context.rect(this.x, this.y, this.width, this.height);
        fn.context.fillStyle = this.fillStyle;
        fn.context.fill();
        fn.context.lineWidth = this.lineWidth;
        fn.context.strokeStyle = this.strokeStyle;
        fn.context.stroke();

        fn.context.beginPath();
        fn.context.fillStyle = this.fontColor;
        fn.context.fill();
        fn.context.font = this.fontSize + 'pt ' + this.fontFamily;
        fn.context.fillText(this.label, this.fontX, this.fontY);

        fn.init();
    }

    fn.context = null;

    fn.localHandler = function(evt){
        if(fn.context.getImageData(evt.x, evt.y, 1, 1)[3] > 220){
            this.fillStyle = 'orange',
            this.fontColor = 'white',
            this.draw();
        } else {
            this.fillStyle = 'yellow',
            this.fontColor = 'black',
            this.draw();
        }
    }

    fn.init = function(){
        bs.WIN.on('mousedown', fn.localHandler);
    }

    fn.addEventListener = function(type, handler){

    }

    fn.removeEventListener = function(type, handler){

    }

    fn.post = function(){

    }




})