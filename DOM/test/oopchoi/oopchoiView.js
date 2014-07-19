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
        this.x;
        this.y;
        this.rotation;
        this.alpha;
        this.fontSize;
        this.fontFamily;
        this.lineWidth;
        this.strokeStyle;

        this.context;
    }

    fn.destroy = function () {
        this.END();
    }

    // 그리기
    fn.draw = function(){
//        this.context.beginPath();
//        this.context.rect(this.x, this.y, this.width, this.height);
//
//        this.context.lineWidth = this.lineWidth;
//        this.context.strokeStyle = this.strokeStyle;
//        this.context.fillStyle = this.fillStyle;
//        this.context.fill();
//        this.context.stroke();
//        this.context.font = this.fontSize + 'pt ' + this.fontFamily;
//        this.context.fillText(this.label, this.width, this.height);

        this.context.beginPath();
        this.context.rect(0, 0, 200, 50);
        this.context.fillStyle = 'yellow';
        this.context.fill();
        this.context.lineWidth = 3;
        this.context.strokeStyle = 'black';
        this.context.stroke();
    }

    fn.addEventListener = function(type, handler){

    }

    fn.removeEventListener = function(type, handler){

    }

    fn.post = function(){

    }




})