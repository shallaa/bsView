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
        this.lineWidth;
        this.strokeStyle;
        this.fontX = 0;
        this.fontY = 0;

        this.context;
    }

    fn.destroy = function () {
        this.END();
    }

    // 그리기
    fn.draw = function(){
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.fillStyle;
        this.context.fill();
        this.context.lineWidth = this.lineWidth;
        this.context.strokeStyle = this.strokeStyle;
        this.context.stroke();

//        this.context.font = this.fontSize + 'pt ' + this.fontFamily;
//        this.context.fillText(this.label, this.fontX, this.fontY);
        this.context.font = 'italic 40pt Calibri';
        this.context.fillText('Hello World!', 150, 100);
    }

    fn.addEventListener = function(type, handler){

    }

    fn.removeEventListener = function(type, handler){

    }

    fn.post = function(){

    }




})