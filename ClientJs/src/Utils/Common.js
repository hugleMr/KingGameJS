/**
 * Created by MyPC on 12/12/2016.
 */
var os = 0;
var _zoneId = -1;
var getTitleGame = function(){
    var title_game = "";

    var zoneId = getZoneId();

    if (zoneId == TAG.TIENLENMIENNAM_ZONE){
        title_game = TXT.TITLE_GAME_TLMN;
    }
    else if (zoneId == TAG.PHOM_ZONE){
        title_game = TXT.TITLE_GAME_PHOM;
    }
    else if (zoneId == TAG.BACAY_ZONE){
        title_game = TXT.TITLE_GAME_BACAY;
    }
    else if (zoneId == TAG.XOCDIA_ZONE){
        title_game = TXT.TITLE_GAME_XOCDIA;
    }
    else if (zoneId == TAG.MAUBINH_ZONE) {
        title_game = TXT.TITLE_GAME_MAUBINH;
    }
    else if (zoneId == TAG.TLMN_SOLO_ZONE) {
        title_game = TXT.TITLE_GAME_TLMN_SOLO;
    }
    else if (zoneId == TAG.LIENG_ZONE) {
        title_game = TXT.TITLE_GAME_TLMN_LIENG;
    }
    return title_game;
};

var getZoneId = function() {
    var result = -1;
    cc.log("this.gameTag", this.gameTag);
    switch (this.gameTag)
    {
        case TAG.SHOW_GAME_SAM:
            result = TAG.SAM_ZONE;
            break;
        case TAG.SHOW_GAME_POCKER:
            result = TAG.POKER_ZONE;
            break;
        case TAG.SHOW_GAME_PHOM:
            result = TAG.PHOM_ZONE;
            break;
        case TAG.SHOW_GAME_TLMN:
            result = TAG.TIENLENMIENNAM_ZONE;
            break;
        case TAG.SHOW_GAME_TLMN_SOLO:
            cc.log("here SHOW_GAME_TLMN_SOLO");
            result = TAG.TLMN_SOLO_ZONE;
            break;
        case TAG.SHOW_GAME_BACAY:
            result = TAG.BACAY_ZONE;
            break;
        case TAG.SHOW_GAME_XITO:
            result = TAG.XITO_ZONE;
            break;
        case TAG.SHOW_GAME_XOCDIA:
            result = TAG.XOCDIA_ZONE;
            break;
        case TAG.SHOW_GAME_MAUBINH:
            result = TAG.MAUBINH_ZONE;
            break;
        case TAG.SHOW_GAME_LIENG:
            result = TAG.LIENG_ZONE;
            break;
        case TAG.SHOW_GAME_WHEEL:
            result = TAG.WHEEL_ZONE;
            break;
        case TAG.SHOW_GAME_TAMXINGAU:
            result = TAG.TAMXINGAU_ZONE;
            break;
        case TAG.SHOW_GAME_MINI_POKER:
            result = TAG.MINIPOKER_ZONE;
            break;
        default:
            result = TAG.TIENLENMIENNAM_ZONE;
            break;
    }

    cc.log("_zoneId", _zoneId);

    return _zoneId != -1 ? _zoneId : result;
};

var setGameTag = function(gameTag) {
    this.gameTag = gameTag;
}

var getGameTag = function() {
    return this.gameTag;
}

var setZoneId = function(zoneId) {
    _zoneId = zoneId;
}

var setGameState = function(state) {
    this.state = state;
}

var getGameState = function() {
    return this.state;
}

var Common = {
    FACEBOOK_CHANNEL: 1,
    GOOGLE_CHANNEL: 2,
    BACAY_ZONE: 1,
    XITO_ZONE: 2,
    POKER_ZONE: 3,
    PHOM_ZONE: 4,
    TIENLENMIENNAM_ZONE: 5,
    TLMN_SOLO_ZONE: 6,
    CARO_ZONE: 7,
    BAUCUA_ZONE: 8,
    CHAN_ZONE: 9,
    SAM_ZONE: 10,
    LIENG_ZONE: 11,
    MAUBINH_ZONE: 12,
    XENG_ZONE: 13,
    XOCDIA_ZONE: 15,
    TAMXINGAU_ZONE: 17,
    WHEEL_ZONE: 18,
    MINIPOKER_ZONE: 19,

    KEY_SESSION_ID : "key_session_id",
    KEY_USER_ID : "key_user_id",
    NO_DEVICE : "NO_DEVICE"
}

var setPrefs = function(key, value){
    cc.sys.localStorage.setItem(key, value);
}

var getPrefs = function(key){
    cc.sys.localStorage.getItem(key);
}

var getCp = function() {
    // if (TEST_ENVIRONMENT)
    return "1";

}

var getVersionCode = function() {
    return "14";
}

var getCountry = function() {
    // if (TEST_ENVIRONMENT)
    return "vn";

}

var getLanguage = function() {
    // if (TEST_ENVIRONMENT)
    return "vi";
}

var getDeviceId =function() {
    /*if (TEST_ENVIRONMENT)
     return "00000000";*/
    return "00000000";
}

var getDeviceInfo = function() {
    /*if (TEST_ENVIRONMENT)
     return "Samsung Galaxy S2";*/
    return "NO_DEVICE";
}

var getPackageName = function() {
    return "com.bigken.ninth.january.seventeen";
}

var getAppVersion = function() {
    //if (TEST_ENVIRONMENT)
    //return "1";
    // #if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
    //     return NativeUtility::appVersion();
    // #endif
    // #if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    //     return GetVersionApp();
    // #endif
    return "1";
}

var sleep = function(milliseconds)
{
    cc.delayTime(milliseconds);
}

var setEnablePurchaseCash = function(_enablePurchaseCash) {
    this._enablePurChaseCash = _enablePurchaseCash;
}

var isEnabledPurchaseCash = function() {
    return this._enablePurChaseCash;
}

var setEnableTopup = function(_enableTopup) {
    this._enableTopup = _enableTopup;
}

var isEnabledTopup = function() {
    return _enableTopup;
}

var setServerAppVersion = function(version){
    this.appVersionFromSever = version;
}

var getServerAppVersion = function(){
    return this.appVersionFromSever;
}

var setFanpageUrl = function(fanpageUrl){
    this._fanpageUrl = fanpageUrl;
}

var getFanpageUrl = function(){
    return this._fanpageUrl;
}

var setWebsiteUrl = function(websiteUrl){
    this._websiteUrl = websiteUrl;
}

var getWebsiteUrl = function(){
    return this._websiteUrl;
}

var setHotLines =function(hotlines){
    this._hotlines = hotlines;
}

var getHotLines=function(){
    return this._hotlines;
}

var setEnableCashToGold = function(enableCashToGold){
    this._enableCashToGold = enableCashToGold;
}

var getEnableCashToGold = function(){
    return this._enableCashToGold;
}

var setCashToGoldRatio = function(cashToGoldRatio){
    this._cashToGoldRatio = cashToGoldRatio;
}

var getCashToGoldRatio = function(){
    return this._cashToGoldRatio;
}

var setEnableQuickPlay = function(enableQuickPlay){
    this._enableQuickPlay = enableQuickPlay;
}

var getEnableQuickPlay = function(){
    return this._enableQuickPlay;
}

var setEnableCashTranfer = function(enableCashTransfer) {
    this._enableCashTransfer = enableCashTransfer;
}

var getEnableCashTransfer = function() {
    return this._enableCashTransfer;
}

var setEnableGiftCode = function(enableGiftCode){
    this.enableGiftCode = enableGiftCode;
}

var isEnableGiftCode = function(){
    return this.enableGiftCode;
}

var setResetPwSmsSyntax = function(resetPwSmsSyntax){
    this.resetPwSmsSyntax = resetPwSmsSyntax;
}

var getResetPwSmsSyntax = function(){
    return this.resetPwSmsSyntax;
}

var setEnableGameIds = function(gameids) {
    this.enableGameIds = gameids;
}
var getEnableGameIds = function() {
    return this.enableGameIds;
}

var setSessionId = function(_sessionid) {
    this.sessionId = _sessionid;
}

var getSessionId = function() {
    // if (sessionId == "-1") {
    //     sessionId = getStringForKey(Common.KEY_SESSION_ID);
    // }
    return this.sessionId;
}

var isHasPlayingMatch = function() {
    return this.hasPlayingMatch;
}

var setHasPlayingMatch = function(_hasPlayingMatch) {
    this.hasPlayingMatch = _hasPlayingMatch;
}

var getUserName = function() {
    return this.userName;
}

var setUserName = function(userName) {
    this.userName = userName;
}

var getDisplayName = function() {
    // if (this.displayName.empty()){
    //     return getUserName();
    // }
    return this.displayName;
}

var setDisplayName = function(displayName) {
    this.displayName = displayName;
}

var getLevel = function() {
    return this.level;
}

var setLevel = function(level) {
    this.level = level;
}

var getCash = function() {
    return this.cash;
}

var setCash = function(cash) {
    this.cash = cash;
}

var setGold = function(gold) {
    this.gold = gold;
}

var getGold = function() {
    return this.gold;
}

var getAvatarId = function() {
    if (this.avatarId < 100000){
        return 0;
    }
    return this.avatarId;
}

var setAvatarId = function(avatarId) {
    this.avatarId = avatarId;
}

var setPhoneNunber= function(phoneNumber){
    this.phoneNumber = phoneNumber;
}

var getPhoneNumber= function(){
    return this.phoneNumber;
}

var setAccountVerify = function(accountVerify){
    this.accountVerify = accountVerify;
}

var getAccountVerify = function(){
    return this.accountVerify;
}

var setDisableCashTransaction = function(disableCashTransaction){
    this.disableCashTransaction = disableCashTransaction;
}

var getDisableCashTransaction = function(){
    return this.disableCashTransaction;
}

var setSecurityKeySeted = function(securityKeySeted){
    this.securityKeySeted = securityKeySeted;
}

var getSecurityKeySeted = function(){
    return this.securityKeySeted;
}

var setAutoReady = function(autoReady) {
    this._autoReady = autoReady;
}

var isAutoRead = function() {
    return this._autoReady;
}

var setAutoDenyInvitation = function(autoDenyInvitation) {
    this._autoDenyInvitation = autoDenyInvitation;
}

var isAutoDenyInvitation = function() {
    return this._autoDenyInvitation;
}

var getOS = function()  {
    //     if (cc.sys.platform == cc.sys.DESKTOP_BROWSER)
    //             os = cc.sys.DESKTOP_BROWSER;
    //     else if(cc.sys.platform == cc.sys.ANDROID)
    //             os = cc.sys.ANDROID;
    //     else if(cc.sys.platform == cc.sys.IOS)
    //         os = cc.sys.IOS;
    //     else
    //         os = cc.sys.DESKTOP_BROWSER;
    //     // end;
    // return os;
    // return cc.sys.DESKTOP_BROWSER;
    return 1;
}

var setUserId = function(userId) {
    this.userId = userId;
}

var getUserId = function() {
    return this.userId;
}

var setHeadLineNotify = function(headline_notify){
    this.headline_nofify = headline_notify;
}

var getHeadLineNotify = function(){
    return this.headline_nofify;
}

var convertString2ByteArray = function(str){
    var bytes = []; // char codes
    var bytesv2 = []; // char codes

    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);

        bytes = bytes.concat([code]);

        bytesv2 = bytesv2.concat([code & 0xff, code / 256 >>> 0]);
    }

    return bytesv2;
}

