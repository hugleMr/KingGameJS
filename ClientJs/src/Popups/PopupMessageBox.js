/**
 * Created by Black3rry on 1/16/17.
 */

var PopupMessageBox = Popup.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function(){
        this._super();

        this.backgroundPopup = MSprite.create(res.POPUP_XACNHAN_BACKGROUND);
        this.backgroundPopup.setAnchorPoint(cc.p(0.5,0.5));
        this.backgroundPopup.setPosition(cc.p(visibleSize.width/2,visibleSize.height/2));
        this.addChild(this.backgroundPopup);

        var bg_title_popup = new cc.Sprite(res.RS_TITLE_POPUP);
        bg_title_popup.setPosition(cc.p(this.backgroundPopup.getContentSize().width / 2,
            this.backgroundPopup.getContentSize().height));
        this.backgroundPopup.addChild(bg_title_popup);

        var title = MLabel.createTitle("Thông báo",bg_title_popup.getContentSize().height*0.6);
        title.setPosition(bg_title_popup.getContentSize().width / 2 - title.getContentSize().width / 2,
            bg_title_popup.getContentSize().height / 2 - title.getContentSize().height / 2);
        bg_title_popup.addChild(title);

        /*var ok = MButton.createWithText("res/btn_green.png", "Đồng ý", POPUP.POPUP_MESSAGE_BOX.BTN_OK);
        ok.setPosition(MVec2(this.backgroundPopup.getWidth() / 2 - ok.getWidth()*0.5,
            this.backgroundPopup.getHeight()*0.2 - ok.getHeight() / 2));
        ok.addTouchEventListener(this.menuCallBack, this);
        this.backgroundPopup.addChild(ok);*/

        this.labelMessage = MLabel.create("", this.backgroundPopup.getHeight()/13);
        this.labelMessage.setTag(POPUP.MESSAGE_BOX.LBL_MESSAGE);
        this.labelMessage.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
        this.labelMessage.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        this.labelMessage.setAnchorPoint(cc.p(0.5,0.5));
        var height_message = this.backgroundPopup.getHeight()*0.8;//(ok.getPosition().y + ok.getHeight() + 2*20);
        var width_message = this.backgroundPopup.getWidth()*0.8;
        //this.labelMessage.setDimensions(cc.size(width_message,height_message));
        this.labelMessage.setDimensions(cc.size(this.backgroundPopup.getWidth()*0.8,
            this.backgroundPopup.getHeight()*0.8));

        this.labelMessage.setPosition(MVec2(this.backgroundPopup.getWidth() / 2,
            (this.backgroundPopup.getHeight()/2)));// + ok.getPosition().y + ok.getHeight())/2));
        this.backgroundPopup.addChild(this.labelMessage);

        //btn close
        var exit = MButton.create(res.IMAGE_CLOSE, POPUP.MESSAGE_BOX.BTN_CLOSE);
        exit.setPosition(cc.p(this.backgroundPopup.getContentSize().width - exit.getContentSize().width *0.6,
            this.backgroundPopup.getContentSize().height - exit.getContentSize().height *0.6));
        exit.addTouchEventListener(this.touchEvent, this);
        this.backgroundPopup.addChild(exit);

        this.setPosition(MVec2(0,-height));
    },

    setMessage: function (message) {
        var MIN_SCALE = 0.8;
        if (this.labelMessage != null){
            this.labelMessage.setString(message);
            this.backgroundPopup.setScale(MIN_SCALE);
            /*if(this.labelMessage.getStringNumLines < 4){
                cc.log("<4");
                this.backgroundPopup.setScale(MIN_SCALE);
                this.labelMessage.setFontSize(this.backgroundPopup.getHeight() / 11.5);
            }else if (this.labelMessage.getStringNumLines > 5){
                this.labelMessage.setFontSize(this.backgroundPopup.getHeight() / 13);
                cc.log(">5");
            }*/
        }
    },

    touchEvent: function(sender,type){

        if(type == ccui.Widget.TOUCH_ENDED){
            switch (sender.getTag()){
                case POPUP.MESSAGE_BOX.BTN_OK :
                {
                    break;
                }
                case POPUP.MESSAGE_BOX.BTN_CLOSE :
                {
                    cc.log("xxxxxxzzzz");
                    this.disappear();
                    break;
                }
                case POPUP.MESSAGE_BOX.BTN_CANCEL :
                {
                    break;
                }
            }
        }
    }
});